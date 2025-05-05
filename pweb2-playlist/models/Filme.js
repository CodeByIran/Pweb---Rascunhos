import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Filme = sequelize.define('Filme', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  duracao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Duração em minutos'
  },
  ano_lancamento: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nota_avaliacao: {
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      min: 0,
      max: 10
    }
  }
}, {
  tableName: 'filmes',
  timestamps: false
});

export default Filme;