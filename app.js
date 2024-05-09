import express from 'express';
import sequelize from './Config/MySQL_Connection.js'
import cors from 'cors'
import userRoutes from './Routes/user.js'
import adminRoutes from './Routes/Admin.js'

const app = express();
const port=3000
app.use(cors())
app.use(express.json())
app.use('/',userRoutes)
app.use('/admin',adminRoutes)



sequelize.sync().then(() => {
  console.log('MYSQL Database Connected');
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect database:', err);
});
