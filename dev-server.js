var config = require("./webpack.config.js");
config.entry.main.unshift("webpack-dev-server/client?http://localhost:8088/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true,
  inline: true
});
server.listen(8088);
