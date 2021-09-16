---

title: bind,call,apply

meta:
  - name: description
    content: bind,call,apply
  - name: keywords
    content: js bind,call,apply

created: 2021/09/16

updated: 2021/09/16

tags:
  - javascript
  - bind,call,apply
  - Yur

---

<br/><br/><br/>

## bind,call,apply

:tropical_drink: 解释    
    在 javascript 中，call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。



:sparkles: Function.prototype.bind()
``` js
    // 如下例子 因为b方法是a调用的 所以b方法内的第一层this是指向a 
    // b方法内部直接调用func,而func因为不是任何对象调用,所以内部this指向window  那么如何让func内部this指向a?
    var a = {
        b: function() {
            console.log(this.c); //hello  
            var func = function() {
                console.log(this.c); //undefined
            }
            func();
        },
        c: 'hello'
    }
    a.b();

    // 方法一: 使用参数_this
    var a = {
        b: function() {
            var _this = this; // 通过赋值的方式将this赋值给that
            var func = function() {
                console.log(_this.c);
            }
            func();
        },
        c: 'hello'
    }
    a.b(); // hello
    console.log(a.c); // hello

    // 方法二: 使用bind()

    // 使用bind方法一
    var a = {
        b: function() {
        var func = function() {
            console.log(this.c);
        }.bind(this);
        func();
        },
        c: 'hello'
    }
    a.b(); // hello
    console.log(a.c); // hello
    
    // 使用bind方法二
    var a = {
        b: function() {
        var func = function() {
            console.log(this.c);
        }
        func.bind(this)();
        },
        c: 'hello'
    }
    a.b(); // hello

    // 特殊例子 这里直接把a.b也就是一个方法赋值给了d 赋值后其内部的this已经不指向a了
    c = 10;
    var a = {
      b: function () {
        console.log(this); //window
        var func = function () {
          console.log(this.c); //10
        }.bind(this);
        func();
      },
      c: 'hello'
    }
    var d = a.b;
    d();

    // 实用场景 vue
    methods:{
        MarqueeTrigger(){
            this.myvar=setInterval(this.Marquee.bind(this),50);
        },
        Marquee(){
            this.$refs.BOX2.innerHTML=this.$refs.BOX1.innerHTML;
            if(this.$refs.ref_n1.scrollLeft-this.$refs.BOX2.offsetWidth>=0){
            this.$refs.ref_n1.scrollLeft-=this.$refs.BOX1.offsetWidth;
            }
            else{
                this.$refs.ref_n1.scrollLeft++;
            }
        },
    }
```
