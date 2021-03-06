const path = require("path");
const themeConfig = require("./config/themeConfig");
const plugins = require("./config/plugins");

module.exports = {
  base: "/vuepress-theme-yur-wyz/",
  evergreen: true,
  theme: path.resolve(__dirname, "../../yur"),
  themeConfig,
  plugins,
  markdown: {
    lineNumbers: true
  },
  host: "localhost",
  port: 2234,
  dest: "public",
  extraWatchFiles: ["./config/plugins.js", "./config/themeConfig.js"]
};
