function formatNumber(num) {
  let str = num.toString();
  let result = "";
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    count++;
    result = str[i] + result;
    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }
  return result;
}

console.log(formatNumber(1234567)); // "1,234,567"
