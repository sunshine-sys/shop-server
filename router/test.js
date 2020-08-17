const express = require("express");
const router = express();
const config = require("./config")

const base_url = "http://" + config.IP + ":" + config.PORT + "/images/banner/"

router.get("/", (req, res) => {
    var id = req.query.id;

    console.log("传过来的参数:", req.query);

    var data = {
        "code": "0",
        "message": "success",
        "data": {
            "banner": [{
                    "image": base_url + "banner1.webp",
                },
                {
                    "image": base_url + "banner2.jpg",
                },
                {
                    "image": base_url + "banner3.jpg",
                },
                {
                    "image": base_url + "banner4.jpg",
                },
                {
                    "image": base_url + "banner15.webp",
                }
            ]
        }
    };
    res.send(data);
})

module.exports = router;