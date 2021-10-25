---

title: fs模块详解

meta:
  - name: description
    content: fs模块详解
  - name: keywords
    content: fs

created: 2021/10/14

updated: 2021/10/14

tags:
  - fs
  - Yur

---

<br/><br/><br/>

## FS模块介绍

:tropical_drink:FS模块是Node.js的文件系统

<br/>

![avatar](../img/nodeJs/fs/fs-1.png)

<br/>

![avatar](../img/nodeJs/fs/fs-2.png)
<br/><br/><br/>

---

<br/>

## FS模块操作文件使用示例
:sparkles: 例子1

- 获取文件信息的三种方式

![avatar](../img/nodeJs/fs/fs-3.png)

<br/>

![avatar](../img/nodeJs/fs/fs-4.png)

<br/>

:sparkles: 例子2

- 通过使用文件描述符获取文件信息

![avatar](../img/nodeJs/fs/fs-5.png)

<br/>

![avatar](../img/nodeJs/fs/fs-6.png)

<br/>

:sparkles: 例子3

- 文件写入

![avatar](../img/nodeJs/fs/fs-7.png)

<br/>

![avatar](../img/nodeJs/fs/fs-8.png)

<br/>
如果不指定编码:默认是 utf-8编码方式   

![avatar](../img/nodeJs/fs/fs-9.png)

<br/>

:sparkles: 例子4

- 文件写入

![avatar](../img/nodeJs/fs/fs-10.png)

<br/>

## FS模块操作文件夹使用示例
:sparkles: 例子1

- 1.创建文件夹  2.读取文件夹的所有文件  3.文件夹重命名<br/>
  判断文件夹是否存在(fs.existSync)<br/>
  创建文件夹(fs.mkdir)<br/>
  读取文件夹(fs.readdir)<br/>
  文件夹重命名(fs.rename)<br/>

![avatar](../img/nodeJs/fs/fs-11.png)

<br/>

## 文件夹复制小练习
:sparkles: 例子1

- fs.readdirSync()可以同步拿到所有文件<br/>
copyFileSync可以拷贝文件<br/>

![avatar](../img/nodeJs/fs/fs-12.png)

<br/>