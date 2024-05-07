import { DataTypes } from 'sequelize';
import sequelize from '../Config/MySQL_Connection.js';

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Category;
