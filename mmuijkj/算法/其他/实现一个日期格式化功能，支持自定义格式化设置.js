// 实现一个日期格式化功能，支持自定义格式化设置
// const text = format(new Date(),”yyyy-MM-dd HH:mm:ss”)
// 输出：2024-04-06 12:22:43
// const text = format(new Date(),”yyyy年MM月dd日”)
// 输出：2024年04月06日
// const text = format(new Date(),”yyyy/M/d”)

function format(date, formatString) {
  const map = {
    yyyy: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"), // 月份从 0 开始，所以加 1
    M: date.getMonth() + 1,
    dd: String(date.getDate()).padStart(2, "0"),
    d: date.getDate(),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };

  let formattedDate = formatString;

  // 遍历 `map` 中的格式化规则，替换字符串
  for (const [key, value] of Object.entries(map)) {
    formattedDate = formattedDate.replace(key, value);
  }

  return formattedDate;
}

function format(date, formatString) {
  const map = {
    yyyy: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    M: date.getMonth() + 1,
    dd: String(date.getDate()).padStart(2, "0"),
    d: date.getDate(),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };

  // 使用正则匹配占位符并替换为对应值
  return formatString.replace(
    /yyyy|MM|M|dd|d|HH|mm|ss/g,
    (match) => map[match]
  );
}
