import express from 'express';
import sequelize from './Config/MySQL_Connection.js'
import User from './Models/User.js';
import Category from './Models/Category.js';
import Task from './Models/Task.js';
import userRoutes from './Routes/user.js'

const app = express();
const port=3000
app.use(express.json())
app.use('/',userRoutes)

sequelize.sync().then(() => {
  console.log('MYSQL Database Connected');
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect database:', err);
});
