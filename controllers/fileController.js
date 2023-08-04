async function uploadFile(req, res) {
    // todo

    const {file} =req
    if(!file){
      return res.status(400).json({status:400,message:"no file provided"})
    }
    //返回图片地址
    res.json({status:200,msg:"File upload successful",data:{filePath:file.url}})
  }
  
  module.exports = { uploadFile };