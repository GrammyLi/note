// 1.0.0  ==> 1
const log = console.log.bind(console, '** debug **')
// 1.0 => 1
const cleanVersion = (v) => {
    let a = v.split('.').reverse()
     //  [, '0', '0'， '1']
    for (let i = 0; i < a.length; i++) {
        let n = parseInt(a[i])
       
        // console.log('n', n)
        if (n !== 0) {
            // 记录i
            return a.slice(i).reverse().map(n => parseInt(n))
        } else {
            continue
        }
    }

}

var compareVersion = function(version1, version2) {
    let v1 = cleanVersion(version1) // [0, 1]
    let v2 = cleanVersion(version2) //  [1, 1]
    // log('v1, v2', v1, v2)
    // version1 = "7.5.2.4", version2 = "7.5.3"
    let r = 1
    let arr1
    let arr2 
    if (v1.length > v2.length) {
       r = 1
       arr1 = v1
       arr2 = v2
    } else {
        // version1 = "1.01", version2 = "1.011"
        r = -1
        arr1 = v2
        arr2 = v1
    }
    for (let i = 0; i < arr1.length; i++) {
        let value1 = arr1[i] || 0
        let value2 = arr2[i] || 0
        if (value1 > value2) {
            return r
        } else if (value1 === value2){
        } else {
            return -r
        }
    }
    return 0
};


console.log(compareVersion("0.1", "1.1")); // -1
console.log(compareVersion("1.0.1", "1")); // 1
console.log(compareVersion("7.5.2.4", "7.5.3")); // -1
console.log(compareVersion("1.01", "1.001")); // 0
console.log(compareVersion("1.0", "1.0.0")); // 0