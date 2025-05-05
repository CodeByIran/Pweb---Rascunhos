import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Comentario = sequelize.define('Comentario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  id_filme: {
    type: DataTypes.INTEGER,
    references: {
      model: 'filmes',
      key: 'id'
    }
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  data_comentario: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  avaliacao: {
    type: DataTypes.DECIMAL(10, 2),
    validate: {
      min: 0,
      max: 10
    }
  }
}, {
  tableName: 'comentarios',
  timestamps: false,
  createdAt: 'data_comentario'
});

export default Comentario;