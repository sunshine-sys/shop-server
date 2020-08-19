const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.use(function (req, res, next) {
    const poxy = req.query.poxy;
    if (poxy) {
        req.header.cookie = req.header.cookie + `_proxy_${proxy}`;
    }
    next();
});

// 获取数据，路到不同的数据接口
app.use("/getTestData", require("./router/test")) // 测试的接口
app.use("/getHomePageContent", require("./router/home_page_content")) // 首页接口
app.use("/getBanner", require("./router/bannar")) // 首页轮播图
app.use("/getLogin", require("./router/login")) // 登录接口
app.use("/postlogin_pwd", require("./router/login_pwd")) // 登录接口

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server runing @http://localhost:${port}`);
});

module.exports = app;