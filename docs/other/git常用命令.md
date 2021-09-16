---

title: git常用命令

meta:
  - name: description
    content: git常用命令几率再次
  - name: keywords
    content: git 

created: 2021/09/16

updated: 2021/09/16

tags:
  - git
  - Yur

---



<br/><br/><br/>

## 拉取已有项目开发
:sparkles: 例子1

``` js
    // 克隆项目到本地
    git clone https分支地址
    或 git clone -b 分支名 https分支地址
    // 下载依赖包
    npm i
    // 运行项目
    npm run dev   
    或 npm run start
```

## 创建新分支开发
:sparkles: 例子1

``` js
    // 切换到主分支 
    git checkout master 
    // 保持本地master代码最新
    git pull
    // 创建本地新分支
    git branch 分支名
    // 切换到本地新分支
    git checkout 分支名
    // 推送 因为原程分支没有这个 所以要如下推送 (推送后远程就有这个分支了)
    git push origin xxx
    // 最后绑定远程和本地分支的关系
    git branch --set-upstream-to=origin/分支名 分支名  
```

## 开发完后提交代码
:sparkles: 例子1

``` js
    // 拉取远程最新代码
    git pull
    // 推送到暂存区
    git add .
    // 提交日志到本地仓库
    git commit -m "更改内容"
    // 推送到对应的远程分支仓库
    git push



    // 可选 查看状态
    git status
    // 可选 查看代码提交记录
    git log
    找到对应的文件 git  diff 文件名  可以查看具体改动点
```

## git分支合并
:sparkles: 例子1 将最新master分支合并到dev分支

``` js
    // 切换到主分支
    git checkout master
    // 拉取master最新代码
    git pull
    // 切换到dev分支
    git checkout dev
    // 拉取dev最新代码
    git pull
    // 合并master分支到dev分支
    git merge master 
```


## git其他可用命令
:sparkles: 例子1

``` js
    // 更新远程分支
    git fetch
    // 查看远程分支
    git branch -a 
    // 切换分支
    git checkout 分支名
```

## git好用的插件
[Sourcetree](https://www.sourcetreeapp.com/)