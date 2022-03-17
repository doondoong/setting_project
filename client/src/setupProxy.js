const { createProxyMiddleware } = require('http-proxy-middleware');
const httpProxy = require("http-proxy");

module.exports = function(app) {

  if(process.env.NODE_ENV === 'production') {
    app.use(
      createProxyMiddleware('/api',{
        target: 'https://git.heroku.com/catting-system.git:7000',
        changeOrigin: true,
      }),
      
    );
  
    app.use(
      createProxyMiddleware('/socket.io', {
        target: 'https://git.heroku.com/catting-system.git:7001',
        changeOrigin: true,
        // ws: true, 
        logLevel: 'debug',
      })
    )
}
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