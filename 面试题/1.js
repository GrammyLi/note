// 实现一个函数，求多个数组的交集，数组个数不定

// 如 fun([1,2,3,4,5], [2,3,4], [2,4,5,5])，输出 [2,4]

const bk = function() {
  let a = []
  let l = arguments.length
  for(let i = 0; i < l; i++) {
    let arr = arguments[i]
    a = [...a, ...arr]
  }
  return Array.from(new Set(a))
}

const isValid = (num, ...args) => {
    let r = true
    let arr = [...args]
    for (let i = 0; i < arr.length; i++) {
         let a = arr[i]
         if (!a.includes(num)) {
             return false
         }
    }
    return r
}

const fun = (...args) => {
  let r = []
  let arr = bk(...args)
  for(let i = 0; i < arr.length; i++) {
    let e = arr[i]
    // if (!r.includes(e)) { // 
    //   r.push(e)
    // }
    if (isValid(e, ...args)) {
        r.push(e)
    }
  }
  console.log('r', r)
  return r
}

fun([1,2,3,4,5], [2,3,4], [2,4,5,5])