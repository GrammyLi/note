// 用 async 和 Promise 实现红绿灯交替展示

// 实现一个红绿灯交替展示的功能，要求红灯亮 3 秒，绿灯亮 2 秒，黄灯亮 1 秒，循环往复。使用 async 和 Promise 实现。

// 定义灯的状态
const RED = "red";
const GREEN = "green";
const YELLOW = "yellow";

// 当前灯的状态
let currentState = RED;

// 灯的容器
const lightContainer = document.getElementById("light-container");

// 更新灯的状态
function updateLight(state) {
  // 清除所有灯的亮状态
  lightContainer.querySelectorAll(".light").forEach((light) => {
    light.classList.remove("active");
  });

  // 根据状态点亮对应的灯
  const lightElement = lightContainer.querySelector(`.${state}`);
  if (lightElement) {
    lightElement.classList.add("active");
  }
}

// 创建一个延迟的 Promise
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// 切换灯的状态
async function switchLight() {
  while (true) {
    updateLight(RED);
    await delay(3000); // 红灯亮 3 秒

    updateLight(GREEN);
    await delay(2000); // 绿灯亮 2 秒

    updateLight(YELLOW);
    await delay(1000); // 黄灯亮 1 秒
  }
}

// 初始化
switchLight();
