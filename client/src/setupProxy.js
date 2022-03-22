const { createProxyMiddleware } = require('http-proxy-middleware');
// const httpProxy = require("http-proxy");


// module.exports = function (app) {
//   app.use(
//       '/api',
//       createProxyMiddleware({
//           target: 'https://chatting-system-no3.herokuapp.com/',
//           changeOrigin: true,
//       })
//   );
// };

module.exports = function(app) {

if(process.env.NODE_ENV === 'production') {
  app.use(
    createProxyMiddleware('/api',{
      target: 'https://chatting-system-no3.herokuapp.com/',
      changeOrigin: true,
    }),
  );


  // app.use(
  //   createProxyMiddleware('/socket.io', {
  //     target: 'https://chatting-system-no3.herokuapp.com/',
  //     changeOrigin: true,
  //     ws: true, 
  //     logLevel: 'debug',
  //   })
  // )

} else {

    app.use(
    createProxyMiddleware('/api',{
      target: 'http://localhost:7000',
      changeOrigin: true,
    }),
  );

  // app.use(
  //   createProxyMiddleware('/socket.io', {
  //     target: 'http://localhost:7001',
  //     changeOrigin: true,
  //     ws: true, 
  //     logLevel: 'debug',
  //   })
  // )

}

};