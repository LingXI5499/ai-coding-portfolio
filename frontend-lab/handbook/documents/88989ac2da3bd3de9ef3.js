window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["88989ac2da3bd3de9ef3"] = {
  "id": "88989ac2da3bd3de9ef3",
  "title": "index.js",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "index.js",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "(function () {\n  window.addEventListener('scroll', () => {\n    const classList = document.querySelector('.navbar').classList;\n\n    if (document.documentElement.scrollTop > 0) classList.add('scrolled');\n    else classList.remove('scrolled');\n  });\n})();"
        }
      ]
    }
  ]
};
