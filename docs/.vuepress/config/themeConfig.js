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
  ],
  postCover: [ // 文章随机封面
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/1039d85f155ebe572ff56f90a626b7a1.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/56e0e59e0ab812163e669e6ed52f7fa3.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/bae275e9f50a46e61498e227df586eb9.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/fb03a35ac8a7ca43a69b89c298b2165a.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/766bb99cdfea168a5611d5ed3ee87e6a.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/abea283e65f3460e6f33383dceec550b.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/b49fa49c69ff125aff9a08b177f94cec.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/bc8cd22dd19d42b85dfa8abc871215bf.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/6f6ca5b0cb3bc43e5895911cc40a343d.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/259d10ede304468d1c12df2f49ed2afd.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/d4650c2a40868b84eda513bca9d13513.jpg',
    'https://cdn.jsdelivr.net/gh/cnguu/pic@master/20171231/banners/eb92164f38952ef26315499f112b963a.jpg',
    '/bg1.jpg',
    '/bg2.jpg'
  ]
};
