const debug = process.env.NODE_ENV !== 'production'
const log = debug ? console.log.bind(console, '*** debug ***') : () => {}

const isArray = function (o) {
  // return Array.isArray(o)
  return Object.prototype.toString.call(o) === '[object Array]'
}

const isObject = function (o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

const arrayDeepEquals = function (a, b) {
  if (a.length !== b.length) {
      return false
  }
  for (let i = 0; i < a.length; i++) {
      if (isArray(a[i]) && isArray(b[i])) {
          if (!arrayDeepEquals(a[i], b[i])) {
              return false
          }
      } else if (isObject(a[i]) && isObject(a[i])) {
          if (!objectDeepEquals(a[i], b[i])) {
              return false
          }
      } else if (a[i] !== b[i]) {
          return false
      } else {
          continue
      }
  }
  return true
}

const objectDeepEquals = function (a, b) {
  if (isObject(a) && isObject(b)) {
      const ks1 = Object.keys(a)
      const ks2 = Object.keys(b)
      if (ks1.length !== ks2.length) {
          return false
      }
      for (let i = 0; i < ks1.length; i++) {
          const k = ks1[i]
          if (isObject(a[k]) && isObject(b[k])) {
              if (!objectDeepEquals(a[k], b[k])) {
                  return false
              }
          } else if (isArray(a[k]) && isArray(b[k])) {
              if (!arrayDeepEquals(a[k], b[k])) {
                  return false
              }
          } else if (a[k] !== b[k]) {
              return false
          }
      }
      return true
  }
  return false
}

const equal = function (a, b) {
  if (isArray(a) && isArray(b)) {
      return arrayDeepEquals(a, b)
  } else if (isObject(a) && isObject(b)) {
      return objectDeepEquals(a, b)
  } else {
      return a === b
  }

}

const deepClone = function (value) {
    if (isObject(value)) {
        let o = {}
        const ks = Object.keys(value)
        for (let i = 0; i < ks.length; i++) {
            let k = ks[i]
            let v = value[k]
            o[k] = deepClone(v)
        }
        return o
    } else if (isArray(value)) {
        let l = []
        for (let i = 0; i < value.length; i++) {
            let e = deepClone(value[i])
            l.push(e)
        }
        return l
    } else {
        return value
    }
}

const g = {
  // debug 打印工具
  log: log,
  // 判断两个变量是否相等
  equal: equal,
  copy: deepClone,
}