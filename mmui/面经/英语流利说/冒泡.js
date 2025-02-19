function bubbleSort(arr) {
    const len = arr.length;
    // 外层循环控制排序的轮数
    for (let i = 0; i < len - 1; i++) {
        // 标记是否发生交换
        let swapped = false;
        // 内层循环进行相邻元素的比较和交换
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换 arr[j] 和 arr[j+1] 的位置
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                // 标记发生了交换
                swapped = true;
            }
        }
        // 如果这一轮没有发生交换，说明数组已经有序，提前结束排序
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// 示例使用
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); 