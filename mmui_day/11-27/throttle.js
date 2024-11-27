// 防抖，顾名思义，防止抖动，以免把一次事件误认为多次，敲键盘就是一个每天都会接触到的防抖操作。

// 想要了解一个概念，必先了解概念所应用的场景。在 JS 这个世界中，有哪些防抖的场景呢

// 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
// 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
// 文本编辑器实时保存，当无任何更改操作一秒后进行保存
const debounce = (f, wait) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      f(...args);
    }, wait);
  };
};
// 节流重在加锁

// scroll 事件，每隔一秒计算一次位置信息等
// 浏览器播放事件，每个一秒计算一次进度信息等
// input 框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求 (也可做防抖)
const throttle = (f, wait) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      f(...args);
      timer = null;
    }, wait);
  };
};
