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
            // 顶部logo
            headnav:{"logo":base_url + "msite/logo.jpg",
            // 顶部导航栏
            
                    "nav1":"首页",
                    "nav2":"关于我们",
                    "nav3":"新闻中心",
                    "nav4":"解决方案",
                    "nav5":"产品中心",
                    "nav6":"服务与支持",
                    "nav7":"联系我们"
                },

            // 首页
            // 轮播图
            "banner": [
               {
                "image": base_url + "msite/1.jpg",
                },{
                "image": base_url + "msite/2.jpg",  
                },{
                "image": base_url + "msite/3.jpg",    
            }
            ],
            // 小轮播的内容
            "textbanner":[
                {"title" :"2018年10月，国家级高新技术企业认证复审通过"},
                {"title" : "2017年11月，深圳飞安瑞科技股份有限公司新三板挂牌上市成功"},
                {"title": "2011年6月，ISO9001质量管理体系认证通过"}
            ],
            // 首页内容
            "MsiteItr" :{
                "leftEn": "Technology",
                "leftCh": "强大研发能力",
                
                "centerEn":"Quality",
                "centerCh":"质量管理",
                
                "rightEn":"LATEST NEWS",
                "rightCh":"最新新闻"
            },

            // 关于我们
            "aboutnav":{"image":base_url +"./msite/pic_01.jpg",
                "nav":"关于我们",
                "nav1":"公司简介",
                "nav2":"企业文化",
                "nav3":"资质荣誉",
                "nav4":"质量管理",
                "nav5":"组织架构",
                "nav6":"发展历程",
                "nav7":"生产设备",},
            // 公司简介
            "profileContent":
                {
                    "title":"公司简介",
                    "img":base_url+"./Msite/cf.jpg",
                    "company":"深圳飞安瑞科技股份有限公司",
                    "first":"成立于2010年3月，是专业从事智能控制器研发、生产和销售的国家级高新技术企业。",
                    "ideas":"公司经营理念：诚信、责任、创新、共赢。",
                    "Content":[
                        {"name":"2011年6月，公司顺利通过了ISO9001认证审核。公司严格按照ISO9001质量管理体系要求运作，结合金碟K3供应链管理系统，确保公司产品高质量及快速交货。"},
                        {"name":"公司拥有强大的研发团队及多种研发平台，能够根据客户的需求，在较短的时间内研发出各种性能优越、符合安规要求的智能控制器，配备专业的研发样板制做及测试实验室。"},
                        {"name":"公司拥有专业的智能控制器生产车间（SMT无尘车间、DIP组装车间），配备了专业的生产、检验、老化设备及可靠性实验室，年产各类智能控制器达1000万套以上。"}
                        ]
                },
            // 企业文化
            "culture":
            {
                "title":"企业文化",
                "list":[
                    {
                        "image":base_url+"./msite/zoujin_19.jpg",
                        "name":"高效",
                        "text":"保证质量优异,确保准时交付"
                    }, {
                        "image":base_url+"./msite/zoujin_21.jpg",
                        "name":"创新",
                        "text":"不断开拓思维，掌握前沿科技，创造核心技术"
                    }, {
                        "image":base_url+"./msite/zoujin_23.jpg",
                        "name":"感恩",
                        "text":"以客户为中心，服务客户，成就客户"
                    }, {
                        "image":base_url+"./msite/zoujin_25.jpg",
                        "name":"服务",
                        "text":"以专业技术为基础，及时沟通，满足客户所需所想"
                    }
                ]
            },
            // 资质荣誉
            "honer":{
                "title":"资质荣誉",
                "list1":[
                    {
                        "image":base_url+"./Msite/01.png",
                        "name":"ISO9001 证书"
                    },
                    {
                        "image":base_url+"./Msite/02.png",
                        "name":"ISO9001 证书"
                    },
                    {
                        "image":base_url+"./Msite/03.png",
                        "name":"知识产权管理体系认证证书"
            
                    },
                    {
                        "image":base_url+"./Msite/04.png",
                        "name":"高新技术企业认证证书"
                    },
                    {
                        "image":base_url+"./Msite/05.png",
                        "name":"UL 证书（ZPVI2)"
                    }
                ],
                "list2":[
                    {
                        "image":base_url+"./Msite/11.jpg",
                        "name":"ISO9001 证书"
                    },
                    {
                        "image":base_url+"./Msite/22.jpg",
                        "name":"ISO9001 证书"
                    },
                    {
                        "image":base_url+"./Msite/33.jpg",
                        "name":"知识产权管理体系认证证书"
            
                    },
                    {
                        "image":base_url+"./Msite/44.jpg",
                        "name":"高新技术企业认证证书"
                    },
                    {
                        "image":base_url+"./Msite/55.jpeg",
                        "name":"UL 证书（ZPVI2)"
                    }
                ]
            
            },
            // 组织架构
            "orgnazation":
            {
                "title":"组织架构",
                "image":base_url+"./Msite/zuji.png"
            },
            // 发展历程
            "develop":
            {
                "title":"发展历程",
                "image":base_url+"./Msite/fz.jpg"
            },
            // 质量管理
           "quality" :{
                "title":"质量管理",
                "intro":"为适应企业发展需要，保证公司核心竞争力、产品科技含量，满足客户日益提高的服务需求，研发部在公司战略的指引下，制订了加强平台建设，培育核心技术；立足工艺优化，服务生产市场；关注用户价值，引领市场需求的职能定位，在家电智能控制领域有着优秀的研发团队，和行业领先技术。",
                "head":[
                   {"name":"验证部门"},
                   {"name":"设备型号/规格"},
                   {"name":"设备名称/描述"},
                   {"name":"供应商"}
               ],
               "col1":"研发仪器设备",
               "unit1":[
                    [
                        // {"content":"研发仪器设备"},
                        {"content":"GPM-8212"},
                        {"content":"功率计"},
                        {"content":"GWINSTEK"}
                    ],[
                        // {"content":"研发仪器设备"},
                        {"content":"GPM-8212"},
                        {"content":"功率计"},
                        {"content":"GWINSTEK"}
                    ],[
                        // {"content":"研发仪器设备"},
                        {"content":"GPM-8212"},
                        {"content":"功率计"},
                        {"content":"GWINSTEK"}
                    ]
               
                ],
                "col2":"品质检测仪器设备",
                "unit2":[
                    [
                        // {"content":"研发仪器设备"},
                        {"content":"GPM-TH2817"},
                        {"content":"LCR数字电桥"},
                        {"content":"TONGHUI"}
                    ], [
                        // {"content":"研发仪器设备"},
                        {"content":"GPM-TH2817"},
                        {"content":"LCR数字电桥"},
                        {"content":"TONGHUI"}
                    ], [
                        // {"content":"研发仪器设备"},
                        {"content":"GPM-TH2817"},
                        {"content":"LCR数字电桥"},
                        {"content":"TONGHUI"}
                    ],
                ],

            },
            // 生产设备
            equire:{
                "title":"生产设备",
                "swiperList":[{
                "first":[
                    {
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },
                    {
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },
                    {
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },
                    {
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },
                    {
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },
                    {
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },{
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },{
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },
                    {
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },
                    {
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },{
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    },{
                        "image":base_url+ "./Msite/高温老化房.jpg",
                        "name":"高温老化"
                    }

                ]},
                {
                    "first":[
                        {
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        }, {
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        },{
                            "image":base_url+ "./Msite/规_双箭头.png",
                            "name":"规_双箭头"
                        }
                    ]
                },
                {
                    "first":[
                        {
                            "image":base_url+ "./Msite/恒温恒湿2.jpg",
                            "name":"恒温恒湿2"
                        },
                    ]
                }
            ]
            },
        }
    };
    res.send(data);
})

module.exports = router;