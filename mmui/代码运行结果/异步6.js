// 请输出执行结果，例如1-2-3-4-5-6-7-8
console.log('1: script start')

setTimeout(function() {
  console.log('2: setTimeout')
}, 0)

Promise.resolve()
  .then(function() {
    console.log('3: promise1')
    process.nextTick(() => {
      console.log('4: nextTick in promise')
    })
    setTimeout(function() {
      console.log('5: setTimeout in promise')
    }, 0)
  })
  .then(function() {
    console.log('6: promise2')
  })

process.nextTick(() => {
  console.log('7: nextTick')
})

console.log('8: script end')

// 作者：牛客162046751号
// 链接：https://www.nowcoder.com/discuss/422508523638071296
// 来源：牛客网