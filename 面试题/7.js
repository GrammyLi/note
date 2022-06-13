for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}

for (var i = 0; i < 5; i++) {
  // 间隔一秒打印
  ((i) => {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  })(i);
}

for (var i = 0; i < 5; i++) {
  // 全部打印
  setTimeout(function (i) {
    console.log(i);
  }(i), 1000 * i);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}




