import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const CanalFilme = sequelize.define('CanalFilme', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_canal: {
    type: DataTypes.INTEGER,
    references: {
      model: 'canais',
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
  data_recomendacao: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'canal_filmes',
  timestamps: false
});

export default CanalFilme;