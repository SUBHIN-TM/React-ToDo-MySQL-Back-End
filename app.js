import express from 'express';
import sequelize from './Config/MySQL_Connection.js'
import User from './Models/User.js';
import Category from './Models/Category.js';
import Task from './Models/Task.js';

const app = express();
const port=3000

sequelize.sync().then(() => {
  console.log('MYSQL Database Connected');
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect database:', err);
});
