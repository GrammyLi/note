不配置这两个属性，碰到 script 会下载然后执行，阻塞 document 解析


```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Script Blocking Document Parsing</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
    <script>
        // 模拟一个耗时的脚本
        for (let i = 0; i < 1000000000; i++) {
            // 模拟一些耗时操作
        }
        console.log('Script executed.');
    </script>
    <p>This paragraph appears after the script.</p>
</body>
</html>

```

在这个例子中，浏览器会解析 <h1> 和 <p> 标签，然后遇到 <script> 标签。由于脚本包含一个循环，模拟了一个长时间的运行过程，浏览器会暂停文档的解析，直到脚本执行完成。因此，"This paragraph appears after the script." 这个段落的内容会在脚本执行完成后才会显示出来。


async、defer 配置后都会异步下载，异步解析
async 下载完了就会解析(无序执行，哪个先下载好先执行)
defer 会等到 document 解析完，顺序执行脚本，然后触发 DOMContentLoaded 事件
