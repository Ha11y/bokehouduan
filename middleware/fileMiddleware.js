const multer =require('multer')
const fs =require("fs")
const path= require("path")
const { text } = require('body-parser')
//文件上传配置
const storage =multer.diskStorage({
    //上传的目标地址，
    destination :(req,file,cb)=>{
        const tempFolderPath =path.join(__dirname,"../tempFiles")
        //如果目录不存在则创建
        if(!fs.existsSync(tempFolderPath)){
            fs.mkdirSync(tempFolderPath);
        }
        cb(null,tempFolderPath);
    },
    //定义上传的文件名
    filename:()=>{

        const ext = path.extname(file.originalname);

        const filename =`${Date.now()}_${Math.floor(Math.random()*10000)}${text}`
        cb(null, filename)
    }
});

//文件上传中间件
const upload =multer({storage});
const uploadMiddleware =upload.single("file")

module.exports =uploadMiddleware