---

title: es6语法

meta:
  - name: description
    content: es6语法
  - name: keywords
    content: js es6

created: 2021/09/16

updated: 2021/09/16

tags:
  - javascript
  - es6
  - Yur

---

<br/><br/><br/>

## promise

:tropical_drink: 原理:   
在Promise的内部，有一个状态管理器的存在，有三种状态：pending、fulfilled、rejected. 
    
1 promise对象初始化状态为pending

2 当调用resolve(成功)，会由pending => fulfilled。此时向then的第一个参数成功回调函数传值.   

3 当调用reject(失败)，会由pending => rejected。此时向catch和then的第二个参数成功回调函数传值.   

4 当成功或者失败,状态凝固不可变了.   

产生原因:
Promise是一种用于解决异步问题的思路(它的出现主要是解决了异步回调地狱(回调函数多层嵌套)的问题)
Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果.

要点:

    1.如何使用?先创建一个Promise实例,然后调用实例的then或者catch方法拿到成功resolve或者失败reject的结果.

    2.Promise构造函数内部是同步的,默认创建实例时就会执行,而Promise的回调(then/catch)是异步的(微任务),只有实例执行到resolve/reject才会执行then/catch.(详情请参考宏任务微任务及js事件环)

    3.promise.then方法每次调用，都返回一个新的promise对象(注意不是之前那个实例) 所以可以链式写法（无论resolve还是reject都是这样）。
    
    4.catch相当于then(null,onRejected),前者只是后者的语法糖而已。(then方法里面有两个参数,第二个参数就是相当于.catch(err))

    5.如果第一个promise返回第二个promise,即第一个异步操作的结果是返回第二个异步操作,那么第一个promise的结果不由自己决定,而由第二个promise决定.

    6.Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。当再.then()便会立即执行,意义在于会在本次事件循环的结尾执行.

    7.finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

    8.Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

:sparkles: 基本使用,解释要点1
``` js
    const fn = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            let num = Math.ceil(Math.random() * 10) // 假设num为7
            if (num > 5) {
                resolve(num) //返回7
            } else {
                reject(num)
            }
        },2000)
    })
    fn.then((res)=>{
        console.log(res) // 7
    },(err)=>{
        console.log(err)
    })
```

:sparkles: 解释要点2
``` js
    const promise = new Promise((resolve, reject) => {
        console.log(1);
        resolve();
        console.log(2);
    });
    promise.then(() => {
        console.log(3);  //异步微任务 此轮事件宏任务结束后执行
    });
    console.log(4);

    // 输出结果为：1，2，4，3。
```

:sparkles: 解释要点 3
``` js
    getJSON("/post/1.json").then(function(post) {
        return getJSON(post.commentURL);
    }).then(function (comments) {
        console.log("resolved: ", comments);
    }, function (err){
        console.log("rejected: ", err);
    });
    // 上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。
```

:sparkles: 解释要点5
``` js
    const p1 = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('fail')), 3000)
    })

    const p2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(p1), 1000)
    })

    p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
    // Error: fail

    // 上面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。
```

:sparkles: 解释要点6
``` js
    // Promise.resolve('foo')
    // 等价于
    // new Promise(resolve => resolve('foo'))


    setTimeout(function () {
        console.log('three');
    }, 0);

    Promise.resolve().then(function () {
        console.log('two');
    });

    console.log('one');

    // one
    // two
    // three
```

:sparkles: 解释要点7
``` js
    promise
    .then(result => {···})
    .catch(error => {···})
    .finally(() => {···});
```

:sparkles: 解释要点8
``` js
    const p = Promise.all([p1, p2, p3]);
    // p的状态由p1、p2、p3决定，分成两种情况。
    // （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
    // （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。


    // 作为参数的几个promise对象一旦有一个的状态为rejected，则all的返回值就是rejected。
    var p1 = Promise.resolve(1),
        p2 = Promise.reject(2),
        p3 = Promise.resolve(3);
    Promise.all([p1, p2, p3]).then((res)=>{
        //then方法不会被执行
        console.log(results);
    }).catch((err)=>{
        //catch方法将会被执行，输出结果为：2
        console.log(err);
    });

    // 这段代码运行时，根据看谁跑的慢的原则，则会在10s之后输出[1,10,5]。over，all收工
    let p1 = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('1s') //1s后输出
            resolve(1)
        },1000)
    })
    let p10 = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('10s') //10s后输出
            resolve(10)
        },10000)
    })
    let p5 = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('5s') //5s后输出
            resolve(5)
        },5000)
    })
    Promise.all([p1, p10, p5]).then((res)=>{
        console.log(res); // 最后输出
    })


    // vue中实际应用
    const PAY_MENTS = {
        "cn":["CNY_WEIXIN","CNY_ALIPAY","CNY_CHINAPAY","BTC","ETH","USDT","LTC"],
    }


    let promises = PAY_MENTS[cn].map(payment => {
          if(payment === 'CNY_ALIPAY' || payment === 'CNY_WEIXIN' || payment === 'CNY_CHINAPAY'){
            //   调取后台接口
            return this._previewCNY(payment)
          }else {
            //   调取后台接口
            return this._previewCOIN(payment)
          }
        })
    // 拿到所有promise执行完后的结果
    let result = await Promise.all(promises)
```

<br/><br/>

---

<br/>

## async

:tropical_drink: 作用:   
异步函数,同步等待.   
要点:

    1.async 函数返回的是一个 Promise 对象,如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。
    2.await针对所跟不同表达式的处理方式：如果一个 Promise 被传递给一个 await 操作符：await 会暂停执行，等待 Promise 对象 resolve，然后恢复 async 函数的执行并返回解析值。非 Promise 对象：直接返回对应的值。

:sparkles: 基本使用,解释要点1
``` js
    async function testAsync() {
        return "hello async";
    }

    const result = testAsync();
    // Promise { 'hello async' }
    console.log(result);
```

:sparkles: 基本使用,解释要点2
``` js
function testAwait(){
    // 只有返回Promise 对象await会暂停执行 否则会返回对应的值
   return new Promise((resolve) => {
       setTimeout(function(){
          console.log("testAwait");
          resolve();
       }, 1000);
   });
}

async function helloAsync(){
   await testAwait();
   console.log("helloAsync");
 }

// testAwait
// helloAsync
helloAsync();
```

<br/><br/>

---

<br/>

## 箭头函数

:tropical_drink: 原理:   
    箭头函数改变了this的指向

要点:

    1.箭头函数的this永远指向其父作用域，任何方法都改变不了，包括call，apply，bind。而普通函数的this指向调用它的那个对象。
    2.多重箭头函数就是一个高阶函数，相当于内嵌函数.
    3.箭头函数的简写,():当参数只有一个时，可以省去,当参数有两个及以上，和没有参数时不可省去.  {}:当函数体只有return语句时，可以省去,当函数体多条语句时，不可省去.
    4.箭头函数中不能使用 new

:sparkles: 基本使用,解释要点1
``` js
    // 普通函数中，init是function，以person.init调用，其内部this就是person本身，而onclick回调是箭头函数，其内部的this，就是父作用域的this，就是person，能得到name。
    let person = {
        name:'jike',
        init:function(){
            //为body添加一个点击事件，看看这个点击后的this属性有什么不同
            document.body.onclick = ()=>{
                alert(this.name);//?? this在浏览器默认是调用时的对象,可变的？                  
            }
        }
    }
    person.init();

    // 上例中，init为箭头函数，其内部的this为全局window，onclick的this也就是init函数的this，也是window，得到的this.name就为undefined。
    let person = {
        name:'jike',
        init:()=>{
            //为body添加一个点击事件，看看这个点击后的this属性有什么不同
            document.body.onclick = ()=>{
                alert(this.name);//?? this在浏览器默认是调用时的对象,可变的？                  
            }
        }
    }
    person.init();
```

:sparkles: 基本使用,解释要点2
``` js
    const add = x => y => y + x;
    //相当于
    function add(x){
        return function(y){
            return y + x;
        };
    }
```

:sparkles: 基本使用,解释要点4
``` js
    let Person = (name) => {
        this.name = name;
    };
    let one = new Person("galler");
```

<br/><br/>

---

<br/>

## class

:tropical_drink: 原理:   
    ES6 的类，完全可以看作构造函数的另一种写法。也就是一种语法糖.

要点:

    1.ES6 的类，完全可以看作构造函数的另一种写法。
    2.使用
    3.类的原型
    4.constructor()方法是类的默认方法

:sparkles: 解释要点1
``` js
    // 构造函数生成实例对象
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    };

    var p = new Point(1, 2);

    // Class生成实例对象 定义toString()方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法与方法之间不需要逗号分隔，加了会报错。
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }
```

:sparkles: 解释要点2
``` js
    class Bar {
        doStuff() {
            console.log('stuff');
        }
    }   

    const b = new Bar();
    b.doStuff() // "stuff"
```

:sparkles: 解释要点3
``` js
    class Point {
        constructor() {
            // ...
        }
        // 与下面的方法其实都定义在prototype属性上面
        toString() {
            // ...
        }

        toValue() {
            // ...
        }
    }

    // 等同于

    Point.prototype = {
        constructor() {},
        toString() {},
        toValue() {},
    };
```

:sparkles: 解释要点4
``` js
    //constructor()方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加。
    class Point {
    }

    // 等同于
    class Point {
        constructor() {}
    }
```
