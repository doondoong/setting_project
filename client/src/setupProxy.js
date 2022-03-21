const { createProxyMiddleware } = require('http-proxy-middleware');
// const httpProxy = require("http-proxy");

module.exports = function(app) {


    // app.use(
    //   createProxyMiddleware('/api',{
    //     target: 'https://git.heroku.com/chatting-system-no3.git:7000',
    //     changeOrigin: true,
    //   }),
      
    // );
  
    // app.use(
    //   createProxyMiddleware('/socket.io', {
    //     target: 'https://git.heroku.com/chatting-system-no3.git:7001',
    //     changeOrigin: true,
    //     // ws: true, 
    //     logLevel: 'debug',
    //   })
    // )



  app.use(
    createProxyMiddleware('/api',{
      target: 'http://localhost:7000',
      changeOrigin: true,
    }),
    
  );

  app.use(
    createProxyMiddleware('/socket.io', {
      target: 'http://localhost:7001',
      changeOrigin: true,
      // ws: true, 
      logLevel: 'debug',
    })
  )

};