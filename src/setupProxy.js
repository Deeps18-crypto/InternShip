const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/signup",
    createProxyMiddleware({
      target: "http://ec2-18-216-115-163.us-east-2.compute.amazonaws.com:9000",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    "/contactus",
    createProxyMiddleware({
      target: "http://ec2-18-216-115-163.us-east-2.compute.amazonaws.com:9001",
      secure: false,
      changeOrigin: true,
    })
  );
};
