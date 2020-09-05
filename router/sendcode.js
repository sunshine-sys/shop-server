const express = require("express");
const router = express();
const config = require("./config")

const base_url = "http://" + config.IP + ":" + config.PORT + "/images/banner/"

router.get("/", (req, res) => {
    var phone = req.query.phone;
    var code = req.query.code;



    console.log("传过来的参数:", req.query);

    var data = {
        "code": "0",
        "message": "成功",
    };

    var data1 = {
        "code": "1",
        "message": "短信验证码发送失败",
    };

    if (phone == 18611111111 || phone == "18611111111") {
        res.send(data);
    } else {
        res.send(data1);
    }

})

module.exports = router;