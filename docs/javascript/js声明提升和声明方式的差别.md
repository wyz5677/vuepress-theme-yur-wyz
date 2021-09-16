---

title: js声明提升和声明方式的差别

meta:
  - name: description
    content: let const var区别
  - name: keywords
    content: let const var js

created: 2021/09/16

updated: 2021/09/16

tags:
  - javascript
  - Yur

---

<br/><br/><br/>

## js声明提升和声明方式的差别

:tropical_drink: 解释    
    var有声明提升,支持反复声明,是函数作用域,如在全局作用域中声明会属于window的属性   
    let,const无声明提升,不支持反复声明,是块级作用域,如在全局作用域中声明的变量不会成为window对象的属性


:sparkles: var的声明提升
``` js
    // 这就是所谓的“提升”（hoist），也就是把所有变量声明都拉到函数作用域的顶部。
    function foo() {
        console.log(age);
        var age = 26;
    }
    foo(); // undefined   而不是报错
    // 是因为等同如下代码
    function foo() {
        var age;
        console.log(age);
        age = 26;
    }
    foo(); // undefined

```

:sparkles: var支持反复声明

``` js
    // 支持反复声明
    function foo() {
        var age = 16;
        var age = 26;
        var age = 36;
        console.log(age);
    }
    foo(); // 36

```

:sparkles: 经典面试

``` js
    for (var i = 0; i < 5; ++i) {
        setTimeout(() => console.log(i), 0)
    }
    // 你可能以为会输出0、1、2、3、4
    // 实际上会输出5、5、5、5、5

    for (let i = 0; i < 5; ++i) {
        setTimeout(() => console.log(i), 0)
    }
// 会输出0、1、2、3、4
```

:sparkles: const注意

``` js
    // const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。
    const person = {};
    person.name = 'Matt'; // ok

    for (const i = 0; i < 10; ++i) {} // 报错 TypeError：给常量赋值
```

