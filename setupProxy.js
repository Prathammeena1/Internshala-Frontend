const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // this should match the beginning part of the API route
    createProxyMiddleware({
      target: 'https://backendapi-cfng.onrender.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api prefix when forwarding to the backend
      },
    })
  );
};
