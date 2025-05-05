import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  login: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

export default Usuario;