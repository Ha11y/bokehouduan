const multer =require('multer')
const MAO = require('multer-aliyun-oss')
const upload = multer({
    storage :MAO({
        config:{
            region:"oss-cn-beijing",
            accessKeyId:"LTAI5tHNneXYUxjXQW8Ye4xN",
            accessKeySecret:"4ePUTHnNxOEbFuiJU1cnzlpITzAoDH",
            bucket:"bird-boke"
        },

    }), 
    //oss中存放文件的文件夹
    destination:"public/images",

})
const ossMiddleware =upload.single('file')

module.exports= ossMiddleware