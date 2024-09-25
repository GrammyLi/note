function unique(arr) {
  return [...new Set(arr)];
}

function unique(arr) {
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
}
