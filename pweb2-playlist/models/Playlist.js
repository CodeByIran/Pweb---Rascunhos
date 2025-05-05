import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Playlist = sequelize.define('Playlist', {
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
  nome: {
    type: DataTypes.STRING(200)
  },
  data_criacao: {
    type: DataTypes.DATEONLY
  }
}, {
  tableName: 'playlists',
  timestamps: false
});

export default Playlist;