import { sequelize, Usuario, Filme, Canal } from './models/index.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco estabelecida!');
    
    // Sincronizar modelos (opcional - cuidado em produção)
    await sequelize.sync({ alter: true });
    console.log('🔃 Modelos sincronizados');
    
    // Testar consultas
    const usuarios = await Usuario.findAll();
    console.log(`👥 Usuários encontrados: ${usuarios.length}`);
    
    const filmes = await Filme.findAll();
    console.log(`🎬 Filmes encontrados: ${filmes.length}`);
    
    const canais = await Canal.findAll();
    console.log(`📺 Canais encontrados: ${canais.length}`);
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await sequelize.close();
    console.log('🔌 Conexão encerrada');
  }
})();