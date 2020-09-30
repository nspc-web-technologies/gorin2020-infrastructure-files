const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const publicDir = "static";

module.exports = {
  outputDir: "public",
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, publicDir),
            to: path.join(__dirname, "public"),
            globOptions: {
              dot: false,
              ignore: ["index.html"]
            }
          }
        ]
      })
    ]
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].template = path.join(__dirname, publicDir + "/index.html");
      return args;
    });
  }
};
