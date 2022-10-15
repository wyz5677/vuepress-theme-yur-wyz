---

title: Vue.js 设计与实现（三）

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

## 第三章：vue.js 3的设计思路

:tropical_drink: 心得 ：vue包含编译系统和渲染系统，各司其职

::: tip
1 vue可以通过<font color="red">模板</font>或者<font color="red">虚拟dom</font>两种方式描述ui，虚拟dom更灵活，模板更直观
:::
::: tip
2 <font color="red">渲染系统</font>可以把<font color="red">虚拟dom转为真实的dom并挂载</font>，其<font color="red">精髓在于用diff算法来做dom更新的比较</font>，只更新需要更新的内容
:::
::: tip
3 <font color="red">组件的本质</font>就是一组<font color="red">虚拟dom元素</font>的封装，可以是返回虚拟dom的<font color="red">函数</font>，也可以是一个<font color="red">对象</font>，对象必须要有函数来产出组件需要渲染的虚拟dom，渲染组件会递归的调用渲染器渲染其的subtree 
:::
::: tip
4 <font color="red">编译系统编译模板为渲染函数</font>
:::


<br/>

---

<br/>


> 要点：
>
> - `1` vue提供两种方式描述ui，一种是模板（template），一种是虚拟dom（js对象来描述真实的dom结构）的方式
> - `2` 渲染系统主要是 render函数和函数中的h函数，主要做的事情就是通过h函数把js Ast给转为虚拟dom，然后通过mount函数把虚拟dom转为真实dom并挂载到真实的dom（比如id为app的div）节点下，在更新的时候，通过patch函数来对比两个节点的子节点，生成新的虚拟dom,再挂载
> - `3` 渲染系统中render函数中的h函数就是辅助创建虚拟dom的工具函数，比如虚拟dom如果很多子节点，需要编写的内容就很多，h函数来包裹后就会少很多代码
> - `4` 组件的本质是函数或者对象（有状态组件）
> - `5` 模板的工作原理就是把template(模板认为是字符串)生成一个与之对应的渲染函数render,然后放入到比如单文件组件的script标签中的组件对象上（和methods平级），然后交给渲染系统处理
``` js
<script>
export default{
	data(){
	},
	methods:{
	},
	render(){
		return h('div',{onclick:handler},'click me')
	}
}
<script>
```
> - `6` vue会通过把动态的内容做一个标识（patchFlags）来提升渲染系统的性能