// models/Task.js

import { DataTypes } from 'sequelize';
import sequelize from '../Config/MySQL_Connection.js';
import User from './User.js'; // Import the User model
import Category from './Category.js'; // Import the Category model

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  completed: {
    type: DataTypes.STRING,
    defaultValue: "Pending"
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER, // Use DataTypes.INTEGER for consistency
    allowNull: false,
    references: {
        model: User,
        key: 'id' // Assuming 'id' is the primary key in the User table
    }
},
category_id: {
  type: DataTypes.INTEGER, // Use DataTypes.INTEGER for consistency
  allowNull: false,
  references: {
      model: Category,
      key: 'id' // Assuming 'id' is the primary key in the User table
  }
}
});

// Define associations
Task.belongsTo(User, { foreignKey: 'user_id' }); // Each task belongs to a user
Task.belongsTo(Category, { foreignKey: 'category_id' }); // Each task belongs to a category

export default Task;
