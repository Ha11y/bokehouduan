const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const ossUploadMiddleware= require("../middleware/ossMiddleware")
const uploadMiddleware = require("../middleware/fileMiddleware");
// 目前只有一个上传文件接口
router.post("/file",ossUploadMiddleware, fileController.uploadFile);

module.exports = router;