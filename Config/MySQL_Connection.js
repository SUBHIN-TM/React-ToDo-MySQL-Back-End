import { Sequelize } from "sequelize";

const sequelize = new Sequelize('TODO', 'root', 'mysql@2024', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false //DISABLE DATABASE LOGGING DETAILS
  });
  
  export default sequelize;