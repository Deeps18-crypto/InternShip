const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/signup",
    createProxyMiddleware({
      target: "http://ec2-18-191-243-132.us-east-2.compute.amazonaws.com:9000",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    "/basicinfo",
    createProxyMiddleware({
      target: "http://ec2-18-191-243-132.us-east-2.compute.amazonaws.com:9000",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    "/verify",
    createProxyMiddleware({
      target: "http://ec2-18-191-243-132.us-east-2.compute.amazonaws.com:9000",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    "/login",
    createProxyMiddleware({
      target: "http://ec2-18-191-243-132.us-east-2.compute.amazonaws.com:9000",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    "/contactus",
    createProxyMiddleware({
      target: "http://ec2-18-191-243-132.us-east-2.compute.amazonaws.com:9001",
      secure: false,
      changeOrigin: true,
    })
  );
};
