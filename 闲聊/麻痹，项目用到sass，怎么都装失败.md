老问题了，换dart-sass

完球，跑起来后，一堆/deep/报错

好像dart-saas只认 deep:


直接把sass打包成js下载到本地，全局引入，这个总不会保存吧

这个不是我一个人用啊

编译的本质也是调用的sass的js呀。你全局引入的时候，就相当于引入了sass。配置顶多就改个入口就行了，又不需要动配置

不管是weboack还是vite，不都是调用对应的js实现对应的功能么

node-sass版本兼容太傻逼了

那有点离谱，直接把package.json里面的node-sass和sass-loader全删了，重新安装sass和对应版本的sass-loader


less底层就是sass