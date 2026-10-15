// Deliberately synthetic API responses for repeatable tests only. Never imported by application code.
export const filePage = (id = 1, title = 'File:Test photo.jpg') => ({
  pageid: id,
  title,
  imageinfo: [
    {
      mime: 'image/jpeg',
      width: 1200,
      height: 800,
      thumburl: `https://upload.wikimedia.org/test/${id}.jpg`,
      descriptionurl: `https://commons.wikimedia.org/wiki/File:Test_${id}.jpg`,
      extmetadata: {
        Artist: { value: '<a href="https://example.org">Test author</a>' },
        LicenseShortName: { value: 'CC BY-SA 4.0' },
        LicenseUrl: { value: 'https://creativecommons.org/licenses/by-sa/4.0/' },
      },
    },
  ],
})
export const photoResponse = {
  query: { pages: Array.from({ length: 30 }, (_, i) => filePage(i + 1)) },
}
