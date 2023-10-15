module.exports = {
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "https://sa-east-1.aws.data.mongodb-api.com",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
      },
      proxy: {
        '/mongo': {
          target: 'https://sa-east-1.aws.data.mongodb-api.com', // Especifique o servidor de destino
          changeOrigin: true, // Permite alterar a origem na resposta
          pathRewrite: {
            '^/mongo': '', // Remove o prefixo /api da URL
          },
        },
      },
    }
  }
};