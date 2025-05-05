import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const PlaylistFilme = sequelize.define('PlaylistFilme', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_playlist: {
    type: DataTypes.INTEGER,
    references: {
      model: 'playlists',
      key: 'id'
    }
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
  assistido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  tempo_assistido: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: 'em minutos'
  },
  data_visualizacao: {
    type: DataTypes.DATEONLY
  },
  nota_avaliacao_usuario: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
}, {
  tableName: 'playlist_filmes',
  timestamps: false
});

export default PlaylistFilme;