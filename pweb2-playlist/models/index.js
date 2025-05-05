import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Importando todos os models
import Usuario from './Usuario.js';
import Filme from './Filme.js';
import Canal from './Canal.js';
import CanalFilme from './CanalFilme.js';
import Playlist from './Playlist.js';
import PlaylistFilme from './PlaylistFilme.js';
import Comentario from './Comentario.js';

// Configurando os relacionamentos

// 1. Usuário tem muitas Playlists
Usuario.hasMany(Playlist, {
  foreignKey: 'id_usuario',
  as: 'playlists'
});
Playlist.belongsTo(Usuario, {
  foreignKey: 'id_usuario',
  as: 'usuario'
});

// 2. Usuário tem muitos Comentários
Usuario.hasMany(Comentario, {
  foreignKey: 'id_usuario',
  as: 'comentarios'
});
Comentario.belongsTo(Usuario, {
  foreignKey: 'id_usuario',
  as: 'usuario'
});

// 3. Filme tem muitos Comentários
Filme.hasMany(Comentario, {
  foreignKey: 'id_filme',
  as: 'comentarios'
});
Comentario.belongsTo(Filme, {
  foreignKey: 'id_filme',
  as: 'filme'
});

// 4. Relação N:M entre Canal e Filme (através de CanalFilme)
Canal.belongsToMany(Filme, {
  through: CanalFilme,
  foreignKey: 'id_canal',
  otherKey: 'id_filme',
  as: 'filmes'
});
Filme.belongsToMany(Canal, {
  through: CanalFilme,
  foreignKey: 'id_filme',
  otherKey: 'id_canal',
  as: 'canais'
});

// 5. Relação N:M entre Playlist e Filme (através de PlaylistFilme)
Playlist.belongsToMany(Filme, {
  through: PlaylistFilme,
  foreignKey: 'id_playlist',
  otherKey: 'id_filme',
  as: 'filmes'
});
Filme.belongsToMany(Playlist, {
  through: PlaylistFilme,
  foreignKey: 'id_filme',
  otherKey: 'id_playlist',
  as: 'playlists'
});

// 6. Relação adicional para PlaylistFilme com Canal
PlaylistFilme.belongsTo(Canal, {
  foreignKey: 'id_canal',
  as: 'canal'
});

// Exportando todos os models e o sequelize
export {
  sequelize,
  Sequelize,
  DataTypes,
  Usuario,
  Filme,
  Canal,
  CanalFilme,
  Playlist,
  PlaylistFilme,
  Comentario
};