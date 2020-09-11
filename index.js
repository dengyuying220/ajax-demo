const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const formidable = require("formidable");
// formidable
const fs = require("fs");
/* app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  bodyParser.json({
    extended: true,
  })
); */
app.use(express.static(__dirname + "/public"));
app.get("/hello", function (req, res) {
  res.send("Hello World");
});
app.get("/first", (req, res) => {
  res.send("hello ajax");
});
app.get("/second", (req, res) => {
  res.send(res.query);
  //res.send(req.body);
});
app.get("/responseData", (req, res) => {
  res.send({
    name: "zhangsan",
  });
});
app.get("/get", (req, res) => {
  res.send(req.query);
});
app.post("/post", (req, res) => {
  res.send(req.body);
});
app.post("/json", (req, res) => {
  res.send(req.body);
});
app.get("/error", (req, res) => {
  //console.log(abc);
  res.status(400).send("not ok");
});
app.get("/cache", (req, res) => {
  fs.readFile("./test.txt", (err, result) => {
    res.send(result);
  });
});

app.get("/wrap", (req, res) => {
  res.send(req.query);
});

app.post("/wrap", (req, res) => {
  res.send(req.body);
});

app.get("/verifyEmailAddress", (req, res) => {
  var val = req.query.email;
  var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  if (!reg.test(val)) {
    res.send("格式错误");
    return;
  } else if (val === "itheima@itcast.cn") {
    res.status(400).send({
      message: "邮箱地址已被注册",
    });
  } else {
    res.send({
      message: "邮箱地址可用",
    });
  }
});

app.get("/searchAutoPrompt", (req, res) => {
  var arr = [
    "黑马程序员",
    "黑马程序员官网",
    "黑马程序员学院",
    "传智播客",
    "传智播客官网",
    "传智播客怎么样",
  ];
  var re = [];
  var key = req.query.key;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(key) === 0 && key.length !== 0) {
      re.push(arr[i]);
    }
  }
  res.send({
    list: re,
  });
});

app.get("/province", (req, res) => {
  var province = {
    status: 0,
    msg: "ok",
    result: [{
        id: 1,
        name: "北京",
        parentid: 0,
        parentname: "",
        areacode: "010",
        zipcode: "100000",
        depth: 1,
      },
      {
        id: 2,
        name: "安徽",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: "",
        depth: 1,
      },
      {
        id: 3,
        name: "福建",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 4,
        name: "甘肃",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 5,
        name: "广东",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 6,
        name: "广西",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 7,
        name: "贵州",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 8,
        name: "海南",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 9,
        name: "河北",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 10,
        name: "河南",
        parentid: 0,
        parentname: "",
        areacode: "",
        zipcode: null,
        depth: 1,
      },
      {
        id: 11,
        name: "黑龙江",
        parentid: 0,
        parentname: "",
        areacode: "",
        zipcode: null,
        depth: 1,
      },
      {
        id: 12,
        name: "湖北",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 13,
        name: "湖南",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 14,
        name: "吉林",
        parentid: 0,
        parentname: "",
        areacode: "",
        zipcode: null,
        depth: 1,
      },
      {
        id: 15,
        name: "江苏",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 16,
        name: "江西",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 17,
        name: "辽宁",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 18,
        name: "内蒙古",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 19,
        name: "宁夏",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 20,
        name: "青海",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 21,
        name: "山东",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 22,
        name: "山西",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 23,
        name: "陕西",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 24,
        name: "上海",
        parentid: 0,
        parentname: "",
        areacode: "021",
        zipcode: "200000",
        depth: 1,
      },
      {
        id: 25,
        name: "四川",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 26,
        name: "天津",
        parentid: 0,
        parentname: "",
        areacode: "022",
        zipcode: "300000",
        depth: 1,
      },
      {
        id: 27,
        name: "西藏",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 28,
        name: "新疆",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 29,
        name: "云南",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 30,
        name: "浙江",
        parentid: 0,
        parentname: "",
        areacode: null,
        zipcode: null,
        depth: 1,
      },
      {
        id: 31,
        name: "重庆",
        parentid: 0,
        parentname: "",
        areacode: "023",
        zipcode: "404100",
        depth: 1,
      },
      {
        id: 32,
        name: "香港",
        parentid: 0,
        parentname: "",
        areacode: "00852",
        zipcode: "999077",
        depth: 1,
      },
      {
        id: 33,
        name: "澳门",
        parentid: 0,
        parentname: "",
        areacode: "00853",
        zipcode: "999078",
        depth: 1,
      },
      {
        id: 34,
        name: "台湾",
        parentid: 0,
        parentname: "",
        areacode: "00886",
        zipcode: null,
        depth: 1,
      },
      {
        id: 51,
        name: "国外",
        parentid: 0,
        parentname: "",
        areacode: "",
        zipcode: null,
        depth: 1,
      },
    ],
  };
  res.send(province);
});

app.get("/city", (req, res) => {
  var city = {
    status: 0,
    msg: "ok",
    result: [{
        id: 321,
        name: "成都",
        parentid: 25,
        parentname: "四川",
        areacode: "028",
        zipcode: "610000",
        depth: 2,
      },
      {
        id: 322,
        name: "绵阳",
        parentid: 25,
        parentname: "四川",
        areacode: "0816",
        zipcode: "621000",
        depth: 2,
      },
      {
        id: 323,
        name: "阿坝",
        parentid: 25,
        parentname: "四川",
        areacode: "0837",
        zipcode: "624600",
        depth: 2,
      },
      {
        id: 324,
        name: "巴中",
        parentid: 25,
        parentname: "四川",
        areacode: "0827",
        zipcode: "636600",
        depth: 2,
      },
      {
        id: 325,
        name: "达州",
        parentid: 25,
        parentname: "四川",
        areacode: "0818",
        zipcode: "635000",
        depth: 2,
      },
      {
        id: 326,
        name: "德阳",
        parentid: 25,
        parentname: "四川",
        areacode: "0838",
        zipcode: "618000",
        depth: 2,
      },
      {
        id: 327,
        name: "甘孜",
        parentid: 25,
        parentname: "四川",
        areacode: "0836",
        zipcode: "626700",
        depth: 2,
      },
      {
        id: 328,
        name: "广安",
        parentid: 25,
        parentname: "四川",
        areacode: "0826",
        zipcode: "638550",
        depth: 2,
      },
      {
        id: 329,
        name: "广元",
        parentid: 25,
        parentname: "四川",
        areacode: "0839",
        zipcode: "628000",
        depth: 2,
      },
      {
        id: 330,
        name: "乐山",
        parentid: 25,
        parentname: "四川",
        areacode: "0833",
        zipcode: "614000",
        depth: 2,
      },
      {
        id: 331,
        name: "凉山",
        parentid: 25,
        parentname: "四川",
        areacode: "0834",
        zipcode: "615000",
        depth: 2,
      },
      {
        id: 332,
        name: "眉山",
        parentid: 25,
        parentname: "四川",
        areacode: "028",
        zipcode: "620000",
        depth: 2,
      },
      {
        id: 333,
        name: "南充",
        parentid: 25,
        parentname: "四川",
        areacode: "0817",
        zipcode: "637000",
        depth: 2,
      },
      {
        id: 334,
        name: "内江",
        parentid: 25,
        parentname: "四川",
        areacode: "0832",
        zipcode: "641000",
        depth: 2,
      },
      {
        id: 335,
        name: "攀枝花",
        parentid: 25,
        parentname: "四川",
        areacode: "0812",
        zipcode: "617000",
        depth: 2,
      },
      {
        id: 336,
        name: "遂宁",
        parentid: 25,
        parentname: "四川",
        areacode: "0825",
        zipcode: "629000",
        depth: 2,
      },
      {
        id: 337,
        name: "雅安",
        parentid: 25,
        parentname: "四川",
        areacode: "0835",
        zipcode: "625000",
        depth: 2,
      },
      {
        id: 338,
        name: "宜宾",
        parentid: 25,
        parentname: "四川",
        areacode: "0831",
        zipcode: "644600",
        depth: 2,
      },
      {
        id: 339,
        name: "资阳",
        parentid: 25,
        parentname: "四川",
        areacode: "028",
        zipcode: "641300",
        depth: 2,
      },
      {
        id: 340,
        name: "自贡",
        parentid: 25,
        parentname: "四川",
        areacode: "0813",
        zipcode: "643000",
        depth: 2,
      },
      {
        id: 341,
        name: "泸州",
        parentid: 25,
        parentname: "四川",
        areacode: "0830",
        zipcode: "646000",
        depth: 2,
      },
    ],
  };
  var parentid = req.query.parentid;
  res.send(city);
});

app.get("/town", (req, res) => {
  var town = {
    status: 0,
    msg: "ok",
    result: [{
        id: 2809,
        name: "广安区",
        parentid: 328,
        parentname: "广安",
        areacode: "0826",
        zipcode: "638550",
        depth: 3,
      },
      {
        id: 2810,
        name: "华蓥市",
        parentid: 328,
        parentname: "广安",
        areacode: "0826",
        zipcode: "638600",
        depth: 3,
      },
      {
        id: 2811,
        name: "岳池县",
        parentid: 328,
        parentname: "广安",
        areacode: "0826",
        zipcode: "638300",
        depth: 3,
      },
      {
        id: 2812,
        name: "武胜县",
        parentid: 328,
        parentname: "广安",
        areacode: "0826",
        zipcode: "638400",
        depth: 3,
      },
      {
        id: 2813,
        name: "邻水县",
        parentid: 328,
        parentname: "广安",
        areacode: "0826",
        zipcode: "638500",
        depth: 3,
      },
    ],
  };
  var parentid = req.query.parentid;
  res.send(town);
});

app.post("/formData", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, feild, files) => {
    res.send({
      feilds: feild
    });
  });
});

app.listen(3000);