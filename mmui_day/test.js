var name = "x";
var people = {
  name: "y",
  setName: (n) => {
    this.name = n;
    console.log(this,this.name, n);
    return () => {
      return this.name;
    };
  },
};
var getName = people.setName(name);

console.log("p", people)
console.log(people.name); // y（答错了）
console.log(getName());
