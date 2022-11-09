---

title: js延迟加载方式总结

meta:
  - name: description
    content: js延迟加载方式总结
  - name: keywords
    content: js延迟加载方式总结

created: 2021/11/9

updated: 2021/11/9

tags:
  - javascript
  - Yur

---

<br/><br/><br/>

## js延迟加载方式

:tropical_drink: 背景   
    **默认浏览器在解析 HTML 的时候，如果遇到一个没有任何属性的 script 标签 ，就会暂停解析，先发送网络请求获取该 JS 脚本的代码内容，然后让 JS 引擎执行该代码，当代码执行完毕后恢复解析，这样就阻塞了页面的加载，那么如何减少页面的空白时间？**

:tropical_drink: 方式    
    1.<font color="red">js放在文档底部</font>（一般是body双标签的尾标签之前），这会在完全渲染页面后才渲染js 用户显示的空白时间变短    
    2.如果给js脚本<font color="red">添加defer属性</font>，会把脚本推迟到文档（html）渲染完毕后执行（同步下载异步执行），同等第一种方式的效果，多个defer脚本会按被列出的顺序执行，defer属性只对外部文件有效    
    3.给js脚本<font color="red">添加async属性</font>，表示异步加载脚本，多个脚本不能保证按顺序执行    
    4.<font color="red">动态创建 script 标签</font>的方式，我们可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。但是这样加入脚本的方式默认是异步的    
    5.通过<font color="red">定时器</font>延迟执行脚本    


:sparkles: 解释要点1
``` js
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      
      <script type="text/javascript" src="./index.js"></script>
  </body>
  </html>
```

:sparkles: 解释要点2
``` js
  <!DOCTYPE html>
  <html>
  <head>
      <script src="test1.js" defer="defer"></script>
      <script src="test2.js" defer="defer"></script>
  </head>
  <body>
  </body>
  </html> 
```

:sparkles: 解释要点3
``` js
  <!DOCTYPE html>
  <html>
  <head>
      <script src="test1.js" async></script>
      <script src="test2.js" async></script>
  </head>
  <body>
  </body>
  </html>  
```

:sparkles: 解释要点4
``` js
  <script type="text/javascript">
    function downloadJSAtOnload() {
      var element = document.createElement("script");
      element.src = "defer.js";
      document.body.appendChild(element);
    }
    if (window.addEventListener) //添加监听事件
      window.addEventListener("load",downloadJSAtOnload, false); //fase为默认，事件在冒泡阶段执行
    else if (window.attachEvent)
      window.attachEvent("onload",downloadJSAtOnload);
    else
      window.onload = downloadJSAtOnload;
  </script>
```


:sparkles: 解释要点5
``` js
  <script> 
      setTimeout(()=>{
          var element = document.createElement("script");
          element.src = "index.js";
          document.body.appendChild(element);
      },1000)
  </script> 
```



