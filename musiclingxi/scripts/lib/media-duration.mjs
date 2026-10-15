// Duration probing without external tools (no ffprobe dependency).
//
// MP3 is read from the first MPEG audio frame header plus the Xing/Info/VBRI frame when
// present, with a bitrate-based estimate as the fallback. WAV is read from the fmt/data
// chunks. Anything else falls back to a byte-rate estimate or 0 so callers can decide.
import { readFile } from 'node:fs/promises';

const MPEG_VERSIONS = { 0: 2.5, 2: 2, 3: 1 };
const LAYERS = { 1: 3, 2: 2, 3: 1 };
// [version][layer] -> [bitrate indexes in kbps]
const BITRATES = {
  '1-1': [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448],
  '1-2': [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384],
  '1-3': [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320],
  '2-1': [0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256],
  '2-2': [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
  '2-3': [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]
};
const SAMPLE_RATES = { 1: [44100, 48000, 32000], 2: [22050, 24000, 16000], 2.5: [11025, 12000, 8000] };

/** Offset where MPEG audio starts, skipping a leading ID3v2 tag. */
function audioStart(buffer) {
  if (buffer.length < 10 || buffer.toString('ascii', 0, 3) !== 'ID3') return 0;
  // ID3v2 size is synchsafe (7 bits per byte) and excludes the 10-byte header.
  const size = ((buffer[6] & 0x7f) << 21) | ((buffer[7] & 0x7f) << 14) | ((buffer[8] & 0x7f) << 7) | (buffer[9] & 0x7f);
  const footer = (buffer[5] & 0x10) ? 10 : 0;
  return Math.min(buffer.length, 10 + size + footer);
}

function findFrameSync(buffer, from = 0) {
  for (let offset = from; offset + 4 <= buffer.length; offset += 1) {
    if (buffer[offset] !== 0xff) continue;
    const second = buffer[offset + 1];
    if ((second & 0xe0) !== 0xe0) continue;
    const version = MPEG_VERSIONS[(second >> 3) & 0x03];
    const layer = LAYERS[(second >> 1) & 0x03];
    if (!version || !layer) continue;
    const third = buffer[offset + 2];
    const bitrateIndex = (third >> 4) & 0x0f;
    const sampleRateIndex = (third >> 2) & 0x03;
    if (bitrateIndex === 0 || bitrateIndex === 15 || sampleRateIndex === 3) continue;
    const channelMode = (buffer[offset + 3] >> 6) & 0x03;
    const padding = (third >> 1) & 0x01;
    return { offset, version, layer, bitrateIndex, sampleRateIndex, channelMode, padding };
  }
  return null;
}

function frameSize(header, bitrateKbps, sampleRate) {
  const { version, layer } = header;
  const samplesPerFrame = layer === 1 ? 384 : layer === 2 ? 1152 : version === 1 ? 1152 : 576;
  if (layer === 1) return Math.floor((12 * bitrateKbps * 1000) / sampleRate + (header.padding ?? 0)) * 4;
  return Math.floor((samplesPerFrame / 8) * bitrateKbps * 1000 / sampleRate) + (header.padding ?? 0);
}

/**
 * Reads the Xing/Info/VBRI header that a LAME-encoded MP3 writes into its first frame.
 * Returns the total duration when the frame count is available.
 */
function readVbrHeader(buffer, header, sampleRate) {
  const { layer, version, channelMode } = header;
  const samplesPerFrame = layer === 1 ? 384 : layer === 2 ? 1152 : version === 1 ? 1152 : 576;
  const sideInfo = layer === 1
    ? (channelMode === 3 ? 17 : 32)
    : version === 1
      ? (channelMode === 3 ? 17 : 32)
      : (channelMode === 3 ? 9 : 17);
  // CRC presence is signalled in the frame header's protection bit.
  const crc = (header.protected ? 2 : 0);
  const start = header.offset + 4 + crc + sideInfo;
  if (start + 8 > buffer.length) return null;
  const tag = buffer.toString('latin1', start, start + 4);
  if (tag === 'Xing' || tag === 'Info') {
    const flags = buffer.readUInt32BE(start + 4);
    if (!(flags & 0x0001)) return null;
    const frames = buffer.readUInt32BE(start + 8);
    if (!frames) return null;
    return (frames * samplesPerFrame) / sampleRate;
  }
  if (tag === 'VBRI') {
    const frames = buffer.readUInt32BE(start + 14);
    if (!frames) return null;
    return (frames * samplesPerFrame) / sampleRate;
  }
  return null;
}

export async function probeMp3Duration(filePath) {
  const buffer = await readFile(filePath);
  const start = audioStart(buffer);
  const header = findFrameSync(buffer, start);
  if (!header) return { seconds: 0, method: 'mp3-no-frame' };
  const { version, layer, bitrateIndex, sampleRateIndex } = header;
  const table = BITRATES[`${version === 1 ? 1 : 2}-${layer}`];
  const sampleRate = SAMPLE_RATES[version][sampleRateIndex];
  const bitrateKbps = table[bitrateIndex];
  // The protection bit is the bit after the sync; a set bit means "no CRC".
  header.protected = (buffer[header.offset + 1] & 0x01) === 0;
  const vbrSeconds = readVbrHeader(buffer, header, sampleRate);
  if (vbrSeconds) return { seconds: vbrSeconds, method: 'mp3-vbr-header' };

  // CBR estimate; the ID3 tag is excluded from the audio payload.
  const audioBytes = buffer.length - start;
  const seconds = (audioBytes * 8) / (bitrateKbps * 1000);
  return { seconds, method: `mp3-cbr-${bitrateKbps}kbps` };
}

export async function probeWavDuration(filePath) {
  const buffer = await readFile(filePath);
  if (buffer.length < 44) return { seconds: 0, method: 'wav-too-short' };
  if (buffer.toString('ascii', 0, 4) !== 'RIFF' || buffer.toString('ascii', 8, 12) !== 'WAVE') {
    return { seconds: 0, method: 'wav-bad-magic' };
  }
  let cursor = 12;
  let byteRate = 0;
  while (cursor + 8 <= buffer.length) {
    const id = buffer.toString('ascii', cursor, cursor + 4);
    const size = buffer.readUInt32LE(cursor + 4);
    if (id === 'fmt ') byteRate = buffer.readUInt32LE(cursor + 8 + 8);
    if (id === 'data') {
      const dataSize = Math.min(size, buffer.length - cursor - 8);
      if (!byteRate) return { seconds: 0, method: 'wav-no-fmt' };
      return { seconds: dataSize / byteRate, method: 'wav-header' };
    }
    cursor += 8 + size + (size % 2);
  }
  return { seconds: 0, method: 'wav-no-data' };
}

/** Best-effort duration in seconds for a bundled audio file. */
export async function probeMediaDuration(filePath) {
  const extension = filePath.slice(filePath.lastIndexOf('.')).toLowerCase();
  if (extension === '.wav') return probeWavDuration(filePath);
  if (extension === '.mp3') return probeMp3Duration(filePath);
  return { seconds: 0, method: 'unsupported' };
}
