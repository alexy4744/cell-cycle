

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/cell-cycle/" : "/",
  configureWebpack: {
    entry: ["@babel/polyfill", "./src/main.ts"],
  }
};
