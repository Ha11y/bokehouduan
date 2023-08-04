const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  // 数据库名称
  "boke",
  // 数据库用户名
  "root",
  // 数据库密码
  "root",
  {
    // 如果是远程数据库，可以填写 ip 地址
    host: "localhost", 
    dialect: "mysql",
  }
);

module.exports = sequelize;