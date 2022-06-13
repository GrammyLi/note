// const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });
// rl.on('line', function(data){
//    console.log(data);
// })
console.log("Hello World!");

const time = 3
const count = 0

const f = () => {
    count += 1
    if (time === count) {
        throw Error
        // 中断
        return 
    }
}

Promise.resolve()
  .then() => { console.log(1) f()  })
  .then(() => { console.log(2) f()  })
  .then(() => { console.log(3) 
   }, )
  .then(() => { console.log(4) f()})
  .then(() => { console.log(5) f()})


  // JSON

const copy = v => JSON.parse(JSON.stringify(v))

const copy = (v) => {
    if (isArray(v) || isObject(v)) {
       let o = isObject(v) ? {} : []
       for (let k in v) {
            let value = v[k]
            // if (valeu === v) {
            //     return
            // }
            o[k] = copy(value)
        }
      return o
    } else {
        return v
    }
}
  