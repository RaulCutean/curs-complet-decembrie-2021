function printPostsFromUserOne() {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].userId === 1) {
      console.log(posts[i].title);
    }
  }
}

printPostsFromUserOne();

function printPostsFromUserTwo() {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].userId === 2) {
      console.log(posts[i].title);
    }
  }
}

printPostsFromUserTwo();

// optimizare cod (abstractizare)

function printPostsFromUser(id) {
  if (typeof id !== "number") return;

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].userId === id) {
      console.log(posts[i].title);
    }
  }
}

console.log("============================================");
printPostsFromUser(1);
console.log("============================================");
printPostsFromUser(2);
console.log("============================================");
printPostsFromUser(3);

function printPosts(initialArray, id) {
  console.log(`=====================${id}=======================`);

  if (initialArray === undefined) return;

  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i].userId === id) {
      console.log(initialArray[i].title);
    }
  }
}

printPosts(posts, 1);

// unire array si object

const nume_1 = ["Bob", "Alice"];
const nume_2 = ["John", "Doe"];

// spread operator: creaza o copie
const nume = [...nume_1, ...nume_2];

console.log(nume);

const allData = [...posts, ...todos];
console.log(allData);

const firstPost = posts[0];
const firstTodo = todos[0];

console.log("first post and todo: ", firstPost, firstTodo);

const objectCopy = { ...firstPost, ...firstTodo };
console.log("objectCopy: ", objectCopy);

let firstPostVar = { ...firstPost };

// first, we make a copy
let copiedPosts = [...posts];

// filtram prin copia lui posts
for (let i = 0; i < copiedPosts.length; i++) {
  if (copiedPosts[i].userId > 1) {
    delete copiedPosts[i];
  }
}

//posts ramane neafectat
console.log(posts);
// dar avem si array-ul filtrat
console.log(copiedPosts);

// immutability
let myAccount = {
  // 0x00
  id: 1, // 0x01
  first_name: "John", // 0x02
  last_name: "Doe", // 0x03
};

myAccount.id = 2; // NU

// DA
myAccount = {
  ...myAccount,
  id: 3,
};

// arrow functions
const functionOne = () => {
  console.log("a functionat");
};

functionOne();

function sum() {
  return 2 + 2;
}

const sumArrow = () => 2 + 2;

const sumAlt = () => {
  return 2 + 2;
};

console.log(sum(), sumArrow(), sumAlt()); // 4 4 4

function sum2(n1, n2) {
  return n1 + n2;
}

const sumArrow2 = (n1, n2) => n1 + n2;

const sumAlt2 = (n1, n2) => {
  return n1 + n2;
};

console.log(sum2(3, 3), sumArrow2(3, 3), sumAlt2(3, 3)); // 6 6 6

// shorthand if / else
const shouldLog = false;

// doar daca e true. Altfel, nu fa nimic
shouldLog && console.log("am logat");

const isLoggerOn = shouldLog ? "is on" : "is off";

console.log(isLoggerOn);

// conditional object values
const privateDataOn = false;

const accountData = {
  id: 2,
  user_name: "zmedalex",
  first_name: privateDataOn ? "hidden" : "Alex",
  last_name: privateDataOn ? "hidden" : "Zmed",
};

console.log(accountData);

function checkAccountType(arg) {
  switch (arg) {
    case "admin":
      console.log("has full administrator access.");
      break;
    case "member":
      console.log("has member's access");
      break;
    case "user":
      console.log("can view some pages");
      break;
    default:
      console.log("has no access");
      break;
  }
}

checkAccountType("sysadmin");

function doCalculation(sign, n1, n2) {
  if (sign !== "+" && sign !== "-") {
    return "operation not supported";
  }
  switch (sign) {
    case "+":
      return n1 + n2;
    default:
      return NaN;
  }
}

// creati un calculator
// porniti de la exemplul de mai sus
// va suporta: adunare, scadere, inmultire, impartire si putere
// va valida argumentele
// sign poate fi doar: + - * /
// n1 si n2 pot fi doar number
doCalculation("+", 20, 14);
