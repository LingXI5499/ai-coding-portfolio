window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["69c23bac71c2203e3b96"] = {
  "id": "69c23bac71c2203e3b96",
  "title": "20-call-apply-bind排错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "20-call-apply-bind排错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 21行代码打印20 20 20，是否正确，为什么\n      const obj = { count: 10 };\n      function fn(x) {\n        return this.count + x;\n      }\n\n      const res1 = fn.call(obj, 10);\n      const res2 = fn.apply(obj, [10]);\n      const res3 = fn.bind(obj, 10);\n\n      console.log(res1, res2, res3);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
