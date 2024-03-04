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
47. safari下iframe页面拿不到localstorage数据的问题：1. safari中, 主页面与iframe页面不在同一个域下，会导致iframe页面也拿不到自己域下的localStorage; 2. <https://stackoverflow.com/questions/63922558/safari-localstorage-not-shared-between-iframes-hosted-on-same-domain>
48. 资源下载功能的通用实现思路:
```typescript
/**
 * 避免使用浏览器自带的下载功能:
 * 1. 部分浏览器如果遇到能识别的资源, 会打开新的窗口进行预览
 * 2. 不同源的资源, 直接使用a标签download, 无法修改资源名称
 */
export const download = async ({
    url,
    filename,
}: {
    url: string;
    filename: string;
}) => {
    const { close: closePageLoading } = PageLoading.show({
        text: '资源下载中',
    });
    const x = new window.XMLHttpRequest();
    x.open('GET', url, true);
    x.responseType = 'blob';
    x.onload = () => {
        const url = window.URL.createObjectURL(x.response);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        closePageLoading();
    };
    x.onerror = () => {
        message.error('资源下载失败');
        closePageLoading();
    };
    x.send();
};

```
49. safari 13.1.3版本, 使用`input[type="file"]`, 点击时完全不会弹起mac系统的文件选择器，而且还会造成页面短暂的卡死
50. safari有时`input[type="file"]`不生效的bug: 需要input渲染到页面上后再click(); 不能display: none; 不能onchange，只能addEventListener。
```typescript
import { getUA } from 'peeler-js';
/** 自动弹出浏览器默认的上传文件弹窗, 获取文件 */
export const getFiles = ({
    accept,
    multiple = false,
    oncancel,
}: {
    accept: string[];
    multiple?: boolean;
    oncancel?: () => void;
}) =>
    new Promise<File[]>((resolve) => {
        // 兼容safari诡异的bug: 需要input渲染到页面上后再click(); 不能display: none; 不能onchange，只能addEventListener
        const { isSafari } = getUA(window.navigator.userAgent);
        const input = document.createElement('input');
        if (isSafari) {
            document.body.appendChild(input);
        }
        input.type = 'file';
        input.accept = accept.join(',');
        input.multiple = multiple;
        input.addEventListener('change', (e: Event) => {
            const target = e.currentTarget as HTMLInputElement;
            const files = Array.from(target?.files ?? []);
            resolve(files);
            if (isSafari) {
                document.body.removeChild(input);
            }
        });
        if (isSafari) {
            setTimeout(() => {
                input.click();
            }, 300);
        } else {
            input.click();
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        input.oncancel = () => oncancel?.();
    });
```
51. typescript的缺陷1: 访问数组索引的时候, 类型不准确, 如 `const arr = [1, 2, 3]; const v = arr[100]; // number`, 需要手动改成 `const v = arr[100] as number | undefined; // number`
52. typescript的缺陷2: 用字符串的方式访问对象属性的时候, 直接强行变成动态的, 不能准确校验, 如 `const obj = { p1: 'v1', p2: 'v2' }; const v = obj[true ? 'p1' : 'p3']; // any`, 并没有报错, 需要尽量避免这种写法, 改成: `const v = true ? obj.p1 : obj.p3; // 报错`
53. 在Mac触控板上，即使手指没有移动，也有可能触发mousemove事件. 这可能是由于触控板的精确度和敏感度造成的。当手指接触触控板时，即使微微晃动或触摸压力发生微小变化，也会被视为移动。主要表现: down的clientX、clienY和move时的clientX、clienY相等
54. window下的firefox浏览器，如果html设置了lang=zh-CN，iconfont高度会和宽度不一致，导致偏移。改成lang=en就正常了。
55. domtoimage等根据html生成图片的库, 目标dom的祖先不能有`display: none`， 因为会影响getCountedStyle的结果, 比如transform为none, 直接导致图片内容的错位
56. safari xlsx导入功能, input的accept不能设置, 因为safari可能识别不出来部分xlsx文件的类型，而且导入后的file.type会为空字符串
57. console.log使用时, 如果有对象数据, 最好用深拷贝拷贝一份再打印 (目的是指向另一个不会被修改空间), 不然console.log后续的代码如果修改了这个对象, chrome的控制台打印出来的就是最终修改完的结果. 比如
```typescript
const o = { a: 1 };
console.log('===o', o); // 有可能打印出2
o.a = 2;
```
58. `querySelector` 该方法使用 CSS3 选择器来查询 DOM，并且 CSS3 不支持以数字开头的 ID 选择器：
在 CSS 中，标识符（包括选择器中的元素名称、类和 ID）只能包含字符 [a-zA-Z0-9] 和 ISO 10646 字符 U+00A0 及更高版本，加上连字符 (-) 和下划线 ( _); 它们不能以数字、两个连字符或连字符后跟数字开头。所以`querySelector('#22')`不生效, 得用 `querySelector('[id="22"]')` 或 `getElementById('22')`
59. React中不能创建comment节点, 但可以用hacker的方式实现:
```typescript
const ReactComment = () => (
    <div
        ref={el => {
            if (!el) return;
            if (!el.isConnected) return;
            el.outerHTML = '<!-- -->';
        }}
        style={{ display: 'none' }}
    />
);
```
60. chrome的devtools面板, 行内布局的元素高度的展示数据是不可靠的
61. lodash的cloneDeep有bug, 有人提issue也不改, 慎用: <https://github.com/lodash/lodash/issues/5364>
62. 少用export *, 因为导入时容易路径不写全, 会加剧[循环导入](https://blog.csdn.net/u010059669/article/details/122876351)的问题, 导致拿到的值为undefined. 检测循环导入: [circular-dependency-plugin](https://www.npmjs.com/package/circular-dependency-plugin)
63. webpack中`import`和`module.exports = xxx`不能混合使用
64. 注意：canvas有像素限制。如下：
```
在chrome 和 Edge中，
canvas矩形的单边最大长度不能超过 65535，并且总像素面积不能超过 268421360 平方像素，也就是说如果矩形的长边是 65535 ，那么短边不能超过4096，如果超出这些限制，则不能正常显示。
在FireFox中,
一般情况下矩形的长边不超过 32767 ，总像素面积不超过125w，但是也有例外：比如宽高设置为 width="3890" height="32133" 虽然满足条件但是不能显示，具体原因不明。
```
```javascript
/** 获取canvas极限值信息的页面: https://titan-h5.meitu.com/xiuxiu/meta-wasmm/version1.0/test.html (源码: https://github.com/z-juln/pits/blob/master/getCanvasLimitInfo.html) */
/** @typedef {{ uaRegexp: RegExp; maxW: number; maxSize: number; }} LimitInfo */
/** 搜狗浏览器13000*13000页面会崩溃, 保险起见取10000 * 10000, 其他没测过的浏览器暂时也用这个值 */
/** @type {Omit<LimitInfo, 'uaRegexp'>} */
const commonLimit = { maxW: 10000, maxSize: 10000 * 10000 };
/** @type {LimitInfo[]} */
const limitList = [
    // mac chrome
    { uaRegexp: /webkit\W.*(chrome|chromium)\W/i, maxW: 65535, maxSize: 268435456 },
    // mac edge
    { uaRegexp: /\bEdge\b/i, maxW: 65535, maxSize: 268435456 },
    // mac safari
    { uaRegexp: /webkit\W(?!.*chrome).*safari\W/i, maxW: 1000000, maxSize: 268435456 },
    // mac firefox
    { uaRegexp: /mozilla.*\Wfirefox\W/i, maxW: 32767, maxSize: 536756224 },
    // mac opera (没测过)
    { uaRegexp: /opera.*\Wpresto\W|OPR/i, ...commonLimit },
    // mac 360 (没测过)
    { uaRegexp: /360/i, ...commonLimit },
    // mac uc (没测过)
    { uaRegexp: /ucbrowser/i, ...commonLimit },
    // mac baidu (没测过)
    { uaRegexp: /bidubrowser/i, ...commonLimit },
    // mac sougou (13000 * 13000会导致页面崩溃)
    { uaRegexp: /metasr/i, maxW: 65535, maxSize: 12000 * 12000 },
    // mac liebao (没测过)
    { uaRegexp: /lbbrowser/i, ...commonLimit },
    // mac qq (没测过)
    { uaRegexp: /qq/i, maxW: 1000000, maxSize: 268435456 },
];
const limitInfo = limitList.find(l => l.uaRegexp.test(window.navigator.userAgent)) ?? commonLimit;
```
65. dom旋转之后, `getBoundingClientRect`拿的不是宽高值
66. ```javascript
    /** 判断col元素是否是占位元素. 部分浏览器 (比如safari), col元素是不占宽高的 */
    export const COL_ELEMENT_IS_BLOCK = (() => {
        const tableEl = document.createElement('table');
        tableEl.innerHTML = '<colgroup><col style="width: 100px;"/></colgroup>';
        document.body.appendChild(tableEl);
        const isBlock = tableEl.querySelector('col')!.clientWidth > 0;
        document.body.removeChild(tableEl);
        return isBlock;
    })();
    ```
