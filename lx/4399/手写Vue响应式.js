const i = document.createElement("input");

document.body.appendChild(i);

i.id = "input";

const input = document.querySelector("#input");

const obj = { username: "张三", age: 18 };

const proxy = new Proxy(obj, {
  get(target, prop) {
    if (prop === "username") {
      return input.value;
    }

    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    if (prop === "username") {
      input.value = value;
    }

    return Reflect.set(target, prop, value);
  },
});

input.addEventListener("input", () => {
  proxy.username = input.value;
});

input.value = proxy.username;
