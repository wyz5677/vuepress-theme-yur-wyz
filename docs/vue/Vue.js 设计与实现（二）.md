---

title: Vue.js 设计与实现（二）

meta:
  - name: description
    content: 书籍笔记
  - name: keywords
    content: vue

created: 2022/10/11

updated: 2022/10/11

tags:
  - vue
  - Yur

---



<br/><br/><br/>

## 第二章：框架设计的核心要素

:tropical_drink: 心得 ：全局视角的把控

::: tip
1 提供<font color="red">友好的警告</font>来提示用户的开发体验，通过变量控制和tree-shaking来控制开发生产环境的警告信息 
:::
::: tip
2 使用<font color="red">tree-shaking</font>来使最后打包的体积最小化
:::
::: tip
3 要<font color="red">提供框架输出不同产物</font>（普通js esm commonjs类型等）的功能   
:::
::: tip
4 框架一般会提供多种能力（options api/composition api）<font color="red">通过特性开关</font>关闭对应特性，让打包体积变小 
:::
::: tip
5 框架需要为用户<font color="red">提供统一的错误处理接口</font>，让用户知悉具体异常
:::
::: tip
6 用ts编写的框架和<font color="red">对ts的提示做支持</font>是两码事  
:::


<br/>

---

<br/>


> 要点：
>
> - `1` 提供友好的警告信息
> - `2` 控制警告信息的体积（通过设置开发环境和生产环境变量来控制警告信息  在生产环境中 没被用上的代码会被tree-shaking掉）
> - `3` 使用tree-shaking来消除永不会被执行的代码（比如未使用的组件），rollup.js(vue.js用其构建)和webpack现在都支持tree-shaking，实现tree-shaking必须使用模块是ES Module，因为tree-shaking依赖ESM的静态结构。如何对tree-shaking做优化？ 比如rollup.js提供了/*#_PURE__*/来提供注释告诉打包工具函数调用不会产生副作用 放心的去Tree-Shaking
> - `4` 框架应该输出什么样的产物？比如js标签引入vue可以得到一个立即表达式的资源，通过修改rollup.js配置可以得到不同的形式的资源，比如script type='module'打包成esmodule格式
> - `5` 通过特性变量控制减少资源体积（比如是否开启option api）
> - `6` 做统一的错误处理函数，让用户注册后可以知道错误的来源（处理函数内部是一个try {正确内容} catch{错误内容返回}）
> - `7` 对ts的提示做支持