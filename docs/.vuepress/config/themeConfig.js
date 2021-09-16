const links = require("./links");

module.exports = {
  lang: "zh-CN",
  logo: "/logo64.png",
  nameplate: {
    title: "wyz",
    width: "40px",
    height: "26px"
  },
  about: true,
  menuCategories: [
    {
      text: "javascript",
      link: "javascript"
    },
    {
      text: "node.js",
      link: "nodeJs"
    },
    {
      text: "其它",
      link: "other"
    }
  ],
  // postCover: [],
  cdn: true,
  beiAn: "海到尽头天作岸,山登绝顶我为峰",
  // hostname: "https://blog.cnguu.cn",
  hostname: "https://wyz5677.github.io/vuepress-theme-yur-wyz",
  reward: [
    "https://static.xmt.cn/ca717dde8ae14ea7ab3c8c74b8711414.png",
    "https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png"
  ],
  links,
  baiDu: {
    // tongJi: "",
    autoPush: true
  },
  // 打赏
  reward: [
    "/qrCode.jpg"
  ]
};
