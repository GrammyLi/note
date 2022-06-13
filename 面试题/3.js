const log = console.log.bind(console, '***debug***')

const cleanData = (k, arrKey, v) => {
    arrKey.push(k)
    if (isObject(v)) {
        // 是对象
        // key: g  value: {h: 300}
        return cleanData(k, arrKey, v)
    } else {
        //         f: 200,
        // key : f, value : 200p
        // 不是对象
        let newKey = arrKey.join(',')
        return [newKey, v]
    }
}

const mapDataPathAndValue = (data, arrKey = []) => {
    let r = {}
    // 遍历对象
    for (let key in data) {
        let value = data[key]
        // 拿到了 key value
        let [newKey, newValue] = cleanData(key, arrKey, value)
        r[newKey] = newValue
    }
    return r 
}

