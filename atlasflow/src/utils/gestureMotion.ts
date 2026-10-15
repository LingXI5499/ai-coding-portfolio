export type GestureOutput =
  { kind: 'move'; dx: number; dy: number } | { kind: 'gather' | 'resume' | 'overview' | 'none' }
export const gestureLabels: Record<string, string> = {
  Open_Palm: '张开手掌',
  Closed_Fist: '握拳',
  Thumb_Up: '点赞',
  Victory: 'V 手势',
  Pointing_Up: '食指向上',
  Thumb_Down: '拇指向下',
  ILoveYou: '摇滚手势',
  None: '姿势尚未识别',
}
export class GestureMotionFilter {
  private gesture = ''
  private frames = 0
  reset() {
    this.gesture = ''
    this.frames = 0
  }
  update(
    name: string,
    score: number,
    point?: { x: number; y: number },
    elapsed = 80,
  ): GestureOutput {
    if (score < 0.55 || !point || !Number.isFinite(point.x) || !Number.isFinite(point.y)) {
      this.reset()
      return { kind: 'none' }
    }
    if (name !== this.gesture) {
      this.gesture = name
      this.frames = 0
    }
    this.frames++
    if (name === 'Open_Palm') {
      if (this.frames < 2) return { kind: 'none' }
      // Off-centre palms continuously pan; slow motion isn't erased by per-frame deadzones.
      const axis = (value: number) =>
        Math.abs(value) < 0.045 ? 0 : Math.max(-35, Math.min(35, value * 140))
      const dt = Math.min(160, Math.max(16, elapsed)) / 80
      return { kind: 'move', dx: -axis(point.x - 0.5) * dt || 0, dy: axis(point.y - 0.5) * dt }
    }
    if (this.frames !== 3) return { kind: 'none' }
    if (name === 'Closed_Fist') return { kind: 'gather' }
    if (name === 'Thumb_Up') return { kind: 'resume' }
    if (name === 'Victory') return { kind: 'overview' }
    return { kind: 'none' }
  }
}
