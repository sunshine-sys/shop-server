const express = require("express");
const router = express();
const config = require("./config")

const base_url = "http://" + config.IP + ":" + config.PORT + "/images/"

const category_url = "http://" + config.IP + ":" + config.PORT + "/images/category"

router.get("/", (req, res) => {
    // var id = req.query.id;

    console.log("传过来的参数:", req.query);

    var data = {
        "code": 0,
        "message": "success",
        "data": {
            // 轮播图
            "banner": [
               {"one" :[{
                "image": base_url + "banner/banner1.webp",
                "goodsId": "001",
                "title":'黄傻逼1号'
                
            },{
                "image": base_url + "banner/banner1.webp",
                "goodsId": "001",
                "title":'黄傻逼2号'
                
            },{
                "image": base_url + "banner/banner1.webp",
                "goodsId": "001",
                "title":'黄傻逼3号'
                
            },{
                "image": base_url + "banner/banner1.webp",
                "goodsId": "001",
                "title":'黄傻逼4号'
                
            },{
                "image": base_url + "banner/banner1.webp",
                "goodsId": "001",
                "title":'黄傻逼5号'
                
            },{
                "image": base_url + "banner/banner1.webp",
                "goodsId": "001",
                "title":'黄傻逼6号'
                
            },{
                "image": base_url + "banner/banner1.webp",
                "goodsId": "001",
                "title":'黄傻逼7号'
                
            },{
                "image": base_url + "banner/banner1.webp",
                "goodsId": "001",
                "title":'黄傻逼8号'
                
            }]
            },
            {
                "one":[{
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                    "title":'佳宁1号'
                },{
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                    "title":'佳宁2号'
                },{
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                    "title":'佳宁3号'
                },{
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                    "title":'佳宁4号'
                },{
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                    "title":'佳宁5号'
                },{
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                    "title":'佳宁6号'
                },{
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                    "title":'佳宁7号'
                },{
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                    "title":'佳宁8号'
                }]
            }
                
 
            ]

        }
    };
    res.send(data);
})

module.exports = router;