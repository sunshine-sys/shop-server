const express = require("express");
const router = express();
const config = require("./config")

const base_url = "http://" + config.IP + ":" + config.PORT + "/images/"

const category_url = "http://" + config.IP + ":" + config.PORT + "/images/category"

router.get("/", (req, res) => {
    // var id = req.query.id;

    console.log("传过来的参数:", req.query);

    var data = {
        "code": "0",
        "message": "success",
        "data": {
            // 轮播图
            "banner": [{
                    "image": base_url + "banner/banner1.webp",
                    "goodsId": "001",
                },
                {
                    "image": base_url + "banner/banner2.jpg",
                    "goodsId": "002",
                },
                {
                    "image": base_url + "banner/banner3.jpg",
                    "goodsId": "003",
                },
                {
                    "image": base_url + "banner/banner4.jpg",
                    "goodsId": "004",
                },
                {
                    "image": base_url + "banner/banner5.webp",
                    "goodsId": "005",
                }
            ],

            // 商品推荐上层
            "recommend": [{
                    "name": "娜娜潮流女装店2020夏新款露锁骨上衣褶皱半身裙套装裙两件套洋气",
                    "image": base_url + "goods/001/cover.webp",
                    "presentPrice": "30.80",
                    "oriPrice": "199",
                    "goodsId": "001",
                },
                {
                    "name": "双孚大码短袖连衣裙收腰显瘦赫本风小黑色胖mm大码女装连衣裙k971",
                    "image": base_url + "goods/002/cover.webp",
                    "presentPrice": "30.80",
                    "oriPrice": "564",
                    "goodsId": "002",
                },
                {
                    "name": "夜店女装性感气质包臀吊带短裙2020夏新款小个子蹦迪露背连衣裙女",
                    "image": base_url + "goods/003/cover.webp",
                    "presentPrice": "30.80",
                    "oriPrice": "245",
                    "goodsId": "003",
                },
                {
                    "name": "jk制服女装学生装套装全套清纯学院风上衣女日系校园百褶裙两件套",
                    "image": base_url + "goods/004/cover.webp",
                    "presentPrice": "30.80",
                    "oriPrice": "200",
                    "goodsId": "004",
                },
            ],

            // 商品中间广告
            "floorPic": [{
                    "pic_address": base_url + "advert/advert1.jpg",
                    "picId": "4",
                },
                {
                    "pic_address": base_url + "advert/advert2.jpg",
                    "picId": "5",
                }
            ],


            // 商品底部推荐
            "floor": [{
                    "image": base_url + "floor/floor1.jpg",
                    "goodsId": "001",
                    "title": "美味的煲仔饭",
                    "score": 1.3,
                    "sale":2000

                },
                {
                    "image": base_url + "floor/floor2.jpg",
                    "goodsId": "002",
                    "title": "网红猪肚鸡仔饭",
                    "score": 3.5,
                    "sale":1030
                },
                {
                    "image": base_url + "floor/floor3.jpg",
                    "goodsId": "003",
                    "title": "香辣、麻辣、蒜蓉小龙虾",
                    "score": 2,
                    "sale":1467
                },
                {
                    "image": base_url + "floor/floor4.jpg",
                    "goodsId": "004",
                    "title": "肥嘟嘟招牌，三鲜粉",
                    "score": 5,
                    "sale":2236
                },
                {
                    "image": base_url + "floor/floor5.webp",
                    "goodsId": "005",
                    "title": "肥嘟嘟招牌，沙虫鲜粉",
                    "score": 3.8,
                    "sale":835
                }
            ],


            // 商品分类
            "category": [{
                    "firstCategoryId": "1",
                    "firstCategoryNmae": "毛衣",
                    "secondCategoryV0": [{
                        "firstCategoryId": "1",
                        "secondCategoryId": "11",
                        "secondCategoryNmae": "羊绒",
                        "comments": "",
                    }],
                    "comments": "",
                    "image": category_url + "1.png",

                },
                {
                    "firstCategoryId": "2",
                    "firstCategoryNmae": "皮衣",
                    "secondCategoryV0": [{
                        "firstCategoryId": "2",
                        "secondCategoryId": "21",
                        "secondCategoryNmae": "假皮衣",
                        "comments": "",
                    }, {
                        "firstCategoryId": "2",
                        "secondCategoryId": "22",
                        "secondCategoryNmae": "真皮衣",
                        "comments": "",
                    }],
                    "comments": "",
                    "image": category_url + "2.png",

                },
                {
                    "firstCategoryId": "3",
                    "firstCategoryNmae": "内衣",
                    "secondCategoryV0": [{
                        "firstCategoryId": "3",
                        "secondCategoryId": "31",
                        "secondCategoryNmae": "情趣内衣",
                        "comments": "",
                    }, {
                        "firstCategoryId": "3",
                        "secondCategoryId": "32",
                        "secondCategoryNmae": "男士内衣",
                        "comments": "",
                    }, {
                        "firstCategoryId": "3",
                        "secondCategoryId": "33",
                        "secondCategoryNmae": "女士内衣",
                        "comments": "",
                    }],
                    "comments": "",
                    "image": category_url + "3.png",

                }
            ]


        }
    };
    res.send(data);
})

module.exports = router;