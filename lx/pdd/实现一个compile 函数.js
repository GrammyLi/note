function compile(str, obj) {
  const exp = /\$\{([^}]+)\}/g;

  function matchFn(match, p1) {
    let curObj = obj;
    let value;

    p1.split(".").forEach((part) => {
      const arrExp = /(\w+)\[(\d+)\]/;
      const matchRes = part.match(arrExp);

      if (matchRes) {
        const [_, name, index] = matchRes;
        value = curObj[name] && curObj[name][index];

        if (value && typeof value !== "object") {
          return value;
        }

        if (!value) throw new Error(`Property not found: ${match}`);

        curObj = value;
      } else {
        value = curObj[part];

        if (value && typeof value !== "object") {
          return value;
        }

        if (!value) throw new Error(`Property not found: ${match}`);

        curObj = value;
      }
    });

    return value;
  }

  return str.replace(exp, matchFn);
}

const template =
  "Hello, ${user.name}! Your balance is${user.balance}. You have ${user.items[0]} in your cart. and${user.items[2].kk}";
const exprObj = {
  user: {
    name: "Alice",
    balance: 100.5,
    items: ["Item1", "Item2", { kk: 1 }],
  },
};
const compiledString = compile(template, exprObj);
console.log(compiledString);
