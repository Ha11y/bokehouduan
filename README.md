


总结:

用到的技术栈 
express: 服务端框架
sequelize: 操作数据库的 orm
mysql2: 数据库驱动
body-parser: 用来解析 request body 的内容
cors: 解决跨域
bcrypt: 密码加密和解密
jsonwebtoken: 登录时生成 token 下发
multer: 用于上传文件


环境搭建:
 
1  创建项目目录

2  进入目录，打开命令行窗口，或者在vscode中打开

3   运行 npm init -y 

4  修改package.json中的script字段为以下代码 ，作为启动入口，安装 nodemon包 当文件更改时可以自动重启

  ···
  "scripts": {
  "start": "nodemon app.js"
},


5  安装依赖 
 
   npm install express sequelize mysql2 body-parser cors bcrypt jsonwebtoken multer

6 创建 目录结构

  expree-blog                   // 根目录
├──  app.js                 // 项目主入口
├──  config                  // 数据库配置
│   └── database.js
├── controllers              // 控制器，写逻辑的地方
│   ├── authController.js    // 登录注册控制器
│   ├── blogController.js     // 博客控制器
│   ├── fileController.js     // 文件控制器
│   └── tagController.js      // 标签控制器
├── middleware               // 中间件
│   ├── authMiddleware.js     // 鉴权中间件
│   └── fileMiddleware.js     // 文件处理中间件
├──  model                   // 数据库模型
│   ├── Blog.js
│   ├── Tag.js
│   └── User.js
├── package.json
├──  routes                   // 路由
│   ├── auth.js
│   ├── blog.js
│   ├── user.js
│   └── tag.js
└──  tempFiles               // 存储上传的文件

