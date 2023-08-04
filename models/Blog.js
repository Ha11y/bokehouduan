const {DataTypes,Model} =require("sequelize")
const sequelize=require("../config/database.js")
const User =require("./User.js")
const Tag = require("./Tag.js")
class Blog extends Model {
   setTags(allTags) {
       this.tags=allTags
    }
}
Blog.init({
     title:{
        comment:"标题",
        type:DataTypes.STRING,
        allowNull:false
     },
     content:{
        comment:"博客内容",
        type:DataTypes.TEXT,
        allowNull:true
     },
     coverImage:{
      comment:"封面图",
      type:DataTypes.STRING,
      allowNull:false
     },
     isDeleted:{
        comment: "是否已经删除",
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
     }, 
},
{
    sequelize,
    modelName:"Blog"
}
);
//一篇博客可以对应多个标签
//一个标签可以对应多个博客
Tag.belongsToMany(Blog,{
    through: "Blog_Tag",
    as :"tags"
});
Blog.belongsToMany(Tag,{
   through:"Blog_Tag",
   as :"tags"
})

// 一篇博客只能属于一个用户
// 一个用户可以拥有多篇博客
Blog.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Blog, { foreignKey: "userId", as: "user" });
Tag.sync()
User.sync()
Blog.sync()
module.exports = Blog;