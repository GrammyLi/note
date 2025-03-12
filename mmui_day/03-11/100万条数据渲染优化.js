// 100万条数据渲染优化
// - 分页 -------------------------- 减少请求量
// - DocumentFragment 文档片段 ----- 减少DOM渲染的次数
// - requestAnimationFrame -------- 多线程
const fragment = document.createDocumentFragment();
for (let i = 0; i < data.length; i++) {
  const div = document.createElement("div");
  div.textContent = data[i];
  fragment.appendChild(div);
}
document.body.appendChild(fragment);

// requestAnimationFrame：

// requestAnimationFrame 允许浏览器在下一帧更新时执行代码，
// 确保所有的绘制操作都与浏览器的渲染周期同步，避免过于频繁的渲染调用，降低性能负担。
// 对于大批量的数据渲染，可以将渲染任务拆分成多个小任务，
// 利用requestAnimationFrame进行多次异步执行，以减少每次渲染的负载

let currentIndex = 0;
const chunkSize = 100; // 每次渲染100条数据

function renderChunk() {
  const fragment = document.createDocumentFragment();
  for (
    let i = currentIndex;
    i < Math.min(currentIndex + chunkSize, data.length);
    i++
  ) {
    const div = document.createElement("div");
    div.textContent = data[i];
    fragment.appendChild(div);
  }
  document.body.appendChild(fragment);
  currentIndex += chunkSize;

  if (currentIndex < data.length) {
    requestAnimationFrame(renderChunk); // 请求下一个渲染批次
  }
}

renderChunk();
