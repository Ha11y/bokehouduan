const jwt =require("jsonwebtoken")



//鉴权中间件
function authMiddleware(req,res,next){

    const authHeader =req.headers["authorization"];
    //从 Authorization 头部解析token,可以使用 axios 的拦截器全局携带上该值
    // token 一般前面都是带 Bearer 的，然后后面接一个空格，接下来才是我们自己定义的 token 内容
    const token =authHeader &&authHeader.split(" ")[1]
    if(!token){
        return res.status(401).json({error:"Unauthorized"});

    }
    jwt.verify(token,"xxx-your-secret-key",(err,user)=>{
        if(err){
            return res.status(403).json({error:"Invalid token"});
        }
        //将用户信息存到请求对象中，方便后续处理
        req.user =user

        //调用next 放行到下一个处理中间件
        next()
    })
}
module.exports= authMiddleware