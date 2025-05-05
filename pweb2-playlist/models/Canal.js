import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Canal = sequelize.define('Canal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  data_criacao: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  genero_tema: {
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'Relacionado ao gênero do canal'
  }
}, {
  tableName: 'canais',
  timestamps: false
});

export default Canal;