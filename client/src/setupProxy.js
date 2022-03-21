const { createProxyMiddleware } = require('http-proxy-middleware');
// const httpProxy = require("http-proxy");

module.exports = function(app) {


    app.use(
      createProxyMiddleware('/api',{
        target: 'https://chatting-system-no3.herokuapp.com/',
        changeOrigin: true,
      }),
      
    );
  
    app.use(
      createProxyMiddleware('/socket.io', {
        target: 'https://chatting-system-no3.herokuapp.com:7001',
        changeOrigin: true,
        // ws: true, 
        logLevel: 'debug',
      })
    )



  // app.use(
  //   createProxyMiddleware('/api',{
  //     target: 'http://localhost:7000',
  //     changeOrigin: true,
  //   }),
    
  // );

  // app.use(
  //   createProxyMiddleware('/socket.io', {
  //     target: 'http://localhost:7001',
  //     changeOrigin: true,
  //     // ws: true, 
  //     logLevel: 'debug',
  //   })
  // )

};