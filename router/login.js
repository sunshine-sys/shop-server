const express = require("express");
const router = express();
const config = require("./config")

const base_url = "http://" + config.IP + ":" + config.PORT + "/images/banner/"

router.get("/", (req, res) => {
    var phone = req.query.phone;
    var password = req.query.password;



    console.log("传过来的参数:", req.query);

    var data = {
        "code": "0",
        "message": "登录成功",
        "data": {
            "token": "12345grthythregwsgwefqwedqwd3efw3fw32",
            "name": "嘟嘟",
            "phone": "18611111111",
            "headImage": base_url + 'banner1.webp',
        }
    };

    var data1 = {
        "code": "400",
        "message": "账号或者密码错误",
    };

    if ((phone == 18611111111 || phone == "18611111111") && (password == 123456 || password == "123456")) {
        res.send(data);
    } else {
        res.send(data1);
    }

})

module.exports = router;