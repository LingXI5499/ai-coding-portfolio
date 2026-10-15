window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["27ff551e3b52dea48aee"] = {
  "id": "27ff551e3b52dea48aee",
  "title": "20-综合案例-建议ATM取款机.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "20-综合案例-建议ATM取款机.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 开始循环 输入框写到 循环里面\n\n      // 3. 准备一个总的金额\n\n      let money = 100;\n\n      while (true) {\n        let re = +prompt(`\n\n        请您选择操作：\n\n        1.存钱\n\n        2.取钱\n\n        3.查看余额\n\n        4.退出\n\n        `);\n\n        // 2. 如果用户输入的 4 则退出循环， break  写到if 里面，没有写到switch里面， 因为4需要break退出循环\n\n        if (re === 4) {\n          break;\n        }\n\n        // 4. 根据输入做操作\n\n        switch (re) {\n          case 1:\n            // 存钱\n\n            let cun = +prompt('请输入存款金额');\n\n            money = money + cun;\n\n            break;\n\n          case 2:\n            // 存钱\n\n            let qu = +prompt('请输入取款金额');\n\n            money = money - qu;\n\n            break;\n\n          case 3:\n            // 存钱\n\n            alert(`您的银行卡余额是${money}`);\n\n            break;\n        }\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
