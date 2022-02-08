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
10. webview全屏时, 不同设备的顶部会呈现不同的样子, 比如手机导航栏透明, 高度也加进去了。解决方法: 见[src/autoPaddingTop.ts](./src/autoPaddingTop.ts)
11. ios阻尼回弹效果。解决方法：1. 跟产品沟通，不解决。2. 使用 inobounce.js。3. 借鉴<https://github.com/zipeijun/vue-bounce/blob/master/src/vue-bounce.js>
12. react使用外部库时，如果外部库直接操作dom，可能会导致removeChild的报错并导致页面崩溃空白。相关答案: <https://stackoverflow.com/questions/54880669/react-domexception-failed-to-execute-removechild-on-node-the-node-to-be-re>
13. localStorage在移动端ios上兼容性不行，千万不要用
14. webview线上代码发生改变后，都不会立即生效，得等一段时间，属于正常情况
