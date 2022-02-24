class Device {
  constructor(type, screenSize, name, ram, cpu) {
    this.type = type;
    this.screen = screenSize;
    this.name = name;
    this.ram = ram;
    this.cpu = cpu;
  }

  getType() {
    return this.type;
  }

  getScreenSize() {
    return `Screen size: ${this.screen} inches.`;
  }

  getName() {
    if (!this.name) {
      return "Name not set.";
    }

    return this.name;
  }

  getRam() {
    return this.ram;
  }

  getCpu() {
    return this.cpu;
  }

  getAllData(extra) {
    return `
        Device type: ${this.type ? this.type : "N / A"} \n
        Device name: ${this.name ? this.name : "N / A"} \n
        Display size: ${this.screen ? this.screen + " inches" : "N / A"} \n
        RAM size: ${this.ram ? `${this.ram}Gb` : "N / A"} \n
        CPU model: ${this.cpu ? this.cpu : "N / A"} \n
        Extra data: ${extra}
      `;
  }
}

const samsunsS21 = new Device("phone", 5.7, "Samsung Galaxy S21");
const macBook = new Device("laptop", 13, "MacBook Air", 8, "M1");

console.log(samsunsS21.getType());
console.log(macBook.getType());

console.log(samsunsS21.getAllData());
console.log(macBook.getAllData("alte informatii"));

console.log("=================================================");
console.log(typeof console);
// const altConsole = new console();
console.log(console);
console.debug("debug");
console.error("error");
// console.memory();

console.clear();
const nume = ["John", "Sarah", "Bob", "Alice", "Tim"];

// map
nume.map((currentArrayElement) => console.log(currentArrayElement));
console.clear();

const names = [...nume];
names.map((name, index) => console.log(index, " Name: ", name));
console.clear();

names.map((name, i) => console.log(`${i + 1}. ${name}`));

console.clear();
const arrayString = names.toString();
const numar = 123;
const numarString = numar.toString();
console.log(arrayString, numarString);

const myName = "Zmed Alex";
console.log(names.length, myName.length);

console.clear();
console.log(names.join(","));

names.pop();
console.log(names, nume);

console.clear();
names.push("Alex");
console.log(names);

names.shift();
console.log(names);

names.unshift("Jane");
console.log(names);

console.clear();
console.log(names.includes("Sarah"));
console.log(names);

function calculator(sign) {
  const availableOperations = ["+", "-", "*", "/", "**"];

  if (availableOperations.includes(sign)) {
    return "OK";
  }

  return "NOK";
}

console.log(calculator("+"), calculator(","));

console.clear();
const filtered = names.filter((name) => name === "Bob");
console.log(filtered, names);

// console.clear();
const foundName = names.find((name, i) => i > 1);
console.log(foundName);

const matches = names.some((name) => name === "Zmed");
console.log(matches);

console.clear();

// toate posts ale userId 3
const postsFromUser3 = posts.filter((post) => post.userId === 3);
console.log(postsFromUser3);

// doar posturile cu id par
const evenIdPosts = posts.filter((post) => post.id % 2 === 0);
console.log(evenIdPosts);
// % 2 === 0 - se citeste modulo 2
// rezultatul impartirii la 2 trebuie sa fie egal cu 0

console.clear();
// print all todos titles
todos.map((todo) => console.log(todo.title));

// print all completed todos titles
console.log("==================");
todos.map((todo) => todo.completed && console.log(todo.title));

console.log("==================");
todos.map((todo) => {
  if (todo.completed) {
    console.log(todo.title);
  }
});

console.log("==================");
const completedTodos = todos.filter((todo) => todo.completed);
completedTodos.map((todo) => console.log(todo.title));

// toate metodele de array [].__proto__
