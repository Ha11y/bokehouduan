
const User = require("../models/User.js")
const bcrypt = require("bcrypt")
const jwt =require('jsonwebtoken')

//注册


async function register(req,res){
  const {username,password,nickname} =req.body;
  try {
    // console.log(username,password,nickname)
    const existingUser =await User.findOne({where:{username}});
    // console.log(existingUser)
    if(existingUser){
        return res.status(400).json({status:400,msg:"Username already exists"})
    }
    //对密码进行加密处理
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({username,password:hashedPassword,nickname})
     res.status(201).json({status:201,msg:"User registered successfully"})

  }
  catch(error){
     res.status(500).json({status:500,msg:"Failed to register user"})
  }

}

//登录
async function login(req,res){
    //todo
    //检查用户是否存在
    const { username, password } = req.body;

  try {
    // 检查用户名是否存在
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ status:401, msg: "Invalid username or password" });
    }

    // 检查密码是否匹配
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ status:401,msg: "Invalid username or password" });
    }

    //更新用户的最后在线时间
    user.lastOnlineTime = new Date();
    await user.save();

    // 创建 token 访问令牌
    const token = jwt.sign({ userId: user.id }, "xxx-your-secret-key", {
      expiresIn: "24h",
    });

    // 返回包含令牌、账号名和用户名的响应
    res.status(200).json({status:200,data:{token, account: user.username, nickname: user.nickname, userId: user.id}});
  } catch (error) {
    res.status(500).json({status:500, msg: "Failed to log in" });
  }
}
module.exports={register,login}