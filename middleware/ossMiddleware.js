const multer =require('multer')
const MAO = require('multer-aliyun-oss')
const upload = multer({
    storage :MAO({
        config:{
            region:"oss-cn-beijing",
            accessKeyId:"同样是自己的",
            accessKeySecret:"填写自己的，可以在阿里云上面注册获取",
            bucket:"bird-boke"
        },

    }), 
    //oss中存放文件的文件夹
    destination:"public/images",

})
const ossMiddleware =upload.single('file')

module.exports= ossMiddleware
