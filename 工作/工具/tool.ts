// 转换时间为 UNIX 时间戳的函数
const convertToUnixTimestamp = (dateString: string, isEndTime: boolean) => {
  const date = new Date(dateString);
  if (isEndTime) {
    date.setHours(23, 59, 59, 999); // 设置结束时间为23:59:59
  } else {
    date.setHours(0, 0, 0, 0); // 设置开始时间为00:00:00
  }
  return Math.floor(date.getTime() / 1000); // 转换为 UNIX 时间戳（秒）
};
