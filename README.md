# pits

记录我所踩过的坑。现在量少，先不做整理，以后再分块

1. Firefox中th还是td的样式跟chrome中不一致，具体是啥样式忘了
2. element-ui 中的 el-input 如果拆分成 :value="val" 和 @input。如果val初始值等于undefined，value就不能被修改了。
3. element-ui 中的 el-input 的 value 不支持 js 表达式。
4. android的webview中，location.replace不能覆盖原来的页面，而是跟push效果一样
5. webview大部分操作系统都不支持0.5的border，比如ios7及以下，android部分版本也是
6. IOS 显示 transparent 展示黑色透明, 应该换成rgba(255,255,255,0)
7. img的src如果是gif（只会动画一次，不会循环动画），需要src重新赋值，gif才能从零开始动画。修正：有些gif只会播放一次，有些gif会循环播放，PS上可以控制。
8. firefox和chrome的css渲染机制很不一样（其它平台也是），比如没脱离文档流就使用z-index，样式布局一复杂就容易出现问题，而且很难排错，所以写css一定要严谨一点
9. 移动端font-size小于12则不生效, 最合适的做法是将字体宽高边距等都设置为原来的两倍, 然后再用transform: scale去缩小回原来的大小
10. webview全屏时, 不同设备的顶部会呈现不同的样子, 比如手机导航栏透明, 高度也加进去了。解决方法: 结合bridge（如果没有则要通知客户端添加），获取用户手机高度进行样式处理。
11. ios阻尼回弹效果。解决方法：<del>1. 跟产品沟通，不解决。2. 使用 inobounce.js。3. 借鉴<https://github.com/zipeijun/vue-bounce/blob/master/src/vue-bounce.js></del> 让客户端加个 `wkwebview.scrollview.bounces = NO`
12. react使用外部库时，如果外部库直接操作dom，可能会导致removeChild的报错并导致页面崩溃空白。相关答案: <https://stackoverflow.com/questions/54880669/react-domexception-failed-to-execute-removechild-on-node-the-node-to-be-re>
13. localStorage在移动端ios上兼容性不行，千万不要用
14. webview线上代码发生改变后，都不会立即生效，得等一段时间，属于正常情况
15. next.js端口错误: <https://blog.csdn.net/bidang3275/article/details/118162711>
16. next.js不支持导入全局css，只能在/pages/_app.tsx下导入，这导致很多第三方组件都没法直接使用，比如antd-mobile，解决方法：<https://blog.csdn.net/qq_38636629/article/details/108850872>
17. 滚动兼容问题特别严重，scroll的smooth模式有兼容问题，scroll-behavior也有兼容问题。解决方法：<http://ask.sov5.cn/q/yXoKGK3ZhQ>(尚未使用过)
18. table样式很难改，且各大浏览器效果差别很大，正常开发一定不要使用table，宁愿都是div
19. 父元素设置relative会将子元素fixed定位改为absolute定位
20. 上层元素overflow: hidden/auto, 则会阻止底层元素position: sticky的功能
21. 部分ios手机: position: sticky在快速滚动后会失效，特别是js的滚动，如scrollIntoView，scrollTo等等，瞬间滚动，使得position: sticky直接失效
22. 大部分web在快速滚动下会引起页面重绘，原因不详，怀疑快速滚动都会引起页面重绘
23. :is很多手机上都用不了，不要用这个；但是:not还好，目前大部分手机没遇到问题
24. 解决浏览器初次进入时，音频不能自动的问题：用howler
25. macos上开发 文件夹名推荐用小写羊肉串命名的，因为macos上大小写不敏感（vscode自动导入可能会把你导入路径变成小写的，就算本来是大写的；另外就是git大小写也不敏感，改了文件名git发觉不了...），而公司一般用linux作为服务器，linux大小敏感
  > 解决方案：macos新增磁盘分区，设置大小写敏感
26. 时间戳重复问题：实际上时间戳重复概率是非常低的，但是api的调用速度远远比不上计算机时间戳的更新速度，这就导致获取的时间戳不准确，所以说写后端一定不能用时间戳当id使用，否则重复概率太高了。 所以得用nanoid或uuid
27. webpack的devServer的proxy设置changeOrigin，在浏览器上的请求头中是看不出来的
28. 类似于 `-webkit-box-orient: vertical;` 这种的老式样式，autoprefixer 在打包成css的时候会自动去掉它，需要在css顶部加 `/*! autoprefixer: off */`, 底部加 `/* autoprefixer: on */`
29. child_process.exec返回整个子进程处理时产生的buffer，这个buffer默认大小是200K。 当子进程返回的数据超过默认大小时，程序就会产生”Error: maxBuffer exceeded”异常。 调大exec的maxBuffer选项可以解决这个问题，不过当子进程返回的数据太过巨大的时候，这个问题还会出现。 因此当子进程返回的数据超过默认大小时，最好的解决方法是使用spawn方法
30. resizeObserver无法监听inline类型的元素
31. 手机safari和oppo浏览器的滚动问题：对fixed定位类型的元素非常不友好。底部工具栏会占据页面高度，100vh就包含了这个工具栏高度，其中safari最tm傻逼，这个工具栏还会时不时的弹出/隐藏，导致整个页面的样式贼几把不可控，解决方式：监听onresize动态获取innerHeiht，这个innerHeight即100vh的大小。Safari还有更傻逼的地方，手搓到顶部还有莫名其妙的滑出白块，解决方式：把html和body的overflow改成hidden。
32. ios webview禁止双指缩放：<https://blog.csdn.net/u012551928/article/details/98869057>
33. git命令执行貌似不准守规范，像node.js的spawn、exec等都无法知道它是否报错，甚至什么时候执行完都不知道，而是在刚开始执行时就结束了，所以如果要写自动化脚本的话，最好用execSync+&&连接符的操作，当然信息还是拿不到的，或者不知道怎么去拿...
34. chrome对HTTP1.1协议的资源 同一个域名最多允许并行请求为6个， 所以请谨慎使用preload ，合理规划你的并行加载机制。老手机webview会用http1.1
35. vscode的文件软链状态展示有bug，例如先npm link my-pkg，此时node_modules/my-pkg是软链，然后npm unlink my-pkg，此时应该不是软链，但在vscode中展示状态仍然是软链
36. eslint: @typescript-eslint/no-unused-vars 规则有时候会误报, 比如ts函数类型定义，函数中的参数会被当作真实变量被判断。解决方案：```rules: { '@typescript-eslint/no-unused-vars': 'off', '@typescript-eslint/no-unused-vars-experimental': 'error' }```。但是lint速度会很明显变慢很多
37. 在node v18.4.0中, --experimental-loader自定义loader内不能使用fs等文件读取甚至更多api, 实际上是版本问题，切换成其它版本就行, 如v18.12.0
38. 公有网站访问私有接口跨域问题：<https://www.cnblogs.com/daysme/p/15493523.html>
39. 不要依赖etag，有些手机会强行缓存静态资源，最合理的做法是静态资源url后加上时间戳
40. `new Stream.Tranform({ objectMode: true, transform })` 其中 transform 的参数chunk, ts提示是any，但实际上是 `import type File from 'vinyl';`的File 类型
41. npm和node版本对应列表: <https://nodejs.org/zh-cn/download/releases>
42. node.js中, spawn的timeout不生效, 或者说有很大的兼容问题(只结束了进程, 但没法区分是不是timeout导致的). 只能手动setTimeout处理. 相关issue: <https://github.com/nodejs/node/issues/43704>
43. 使用tsc打包后d.ts文件丢失, 原因: .d.ts文件被视为编译器进行类型检查的不可修改的输入。它们不用于任何输出生成，这也意味着它们不会被复制到build。您可以阅读更多有关维护者立场的[here](https://github.com/Microsoft/TypeScript/issues/5112)
44. 有些用户设备上出现莫名其妙加空格的情况：谷歌浏览器自带的翻译会多加空格，还有浏览器插件。所以排查问题需要在浏览器纯净模式下排查，才能规避各种用户的问题
45. chrome的input样式(自动选择后的背景色)无法清除: `input:-webkit-autofill, input:-webkit-autofill:focus { transition: background-color 0s 600000s, color 0s 600000s; }` 链接来源: <https://stackoverflow.com/questions/61083813/how-to-avoid-internal-autofill-selected-style-to-be-applied>
46. 各大主流浏览器，cookie的配置samesite默认值都不一样，比如chrome是None，safari是Lax
47. safari下iframe页面localstorage拿不到自己域的数据的问题：<https://stackoverflow.com/questions/63922558/safari-localstorage-not-shared-between-iframes-hosted-on-same-domain>
