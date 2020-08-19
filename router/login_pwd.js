const express = require("express");
const router = express();
const config = require("./config")

const base_url = "http://" + config.IP + ":" + config.PORT + "/images/banner/"
router.post('/', function (req, res) {
    const name = req.body.name
    const pwd = md5(req.body.pwd)
    const captcha = req.body.captcha.toLowerCase()
    console.log('/login_pwd', name, pwd, captcha, req.session)
  
    // 可以对用户名/密码格式进行检查, 如果非法, 返回提示信息
    if(captcha!==req.session.captcha) {
      return res.send({code: 1, msg: '验证码不正确'})
    }
    // 删除保存的验证码
    delete req.session.captcha
  
    UserModel.findOne({name}, function (err, user) {
      if (user) {
        console.log('findUser', user)
        if (user.pwd !== pwd) {
          res.send({code: 1, msg: '用户名或密码不正确!'})
        } else {
          req.session.userid = user._id
          res.send({code: 0, data: {_id: user._id, name: user.name, phone: user.phone}})
        }
      } else {
        const userModel = new UserModel({name, pwd})
        userModel.save(function (err, user) {
          // 向浏览器端返回cookie(key=value)
          // res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
          req.session.userid = user._id
          const data = {_id: user._id, name: user.name}
          // 3.2. 返回数据(新的user)
          res.send({code: 0, data})
        })
      }
    })
  })
module.exports = router;