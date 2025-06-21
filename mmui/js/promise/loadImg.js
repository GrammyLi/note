// 5、手写promise加载一张图片
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error(`图片加载失败====${src}`));
    };
    img.src = src;
  });
}
