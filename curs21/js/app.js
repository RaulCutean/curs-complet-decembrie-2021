// event loop

function fn1(number1, string1) {
  console.log("ceva", number1, string1);
}

fn1(13, "treisprezece");

function fn2({ name }) {
  console.log(name);
}

fn2({ name: "IT School" });

function fn3(fn) {
  fn();
}

fn3(() => console.log("callback"));

// =======================
function fn4(callback) {
  const number1 = 22;
  callback();
}

const number1 = 11;

fn4(() => console.log(number1));

const array1 = [1, 2, 3];

array1.map((el, i) => console.log(el, i));

// polling simple example
// setInterval(callback, time)
// setInterval(() => console.log("waiting..."), 1000);

console.log("done waiting");

// exemplu cod asincron
console.log(1);
// setTimeout(callback, time)
setTimeout(() => console.log(2), 0);
console.log(3);

const btn1 = document.querySelector("#loginPageSubmit");

btn1.addEventListener("click", () => {
  alert("Ai dat click pe buton");
});

const input1 = document.querySelector("#demo");

input1.addEventListener("keyup", () => {
  console.log(input1.value);
});

// input1.addEventListener("click", () => {
//   input1.style.border = "1px solid red";
// });

input1.addEventListener("focus", () => {
  input1.style.borderBottom = "1px solid red";
});

input1.addEventListener("blur", () => {
  input1.style.borderBottom = "1px solid blue";
});

// promises
// pending -> resolved
//         -> rejected

const responseSuccess = true;

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (responseSuccess) {
      resolve("Promise rezolvat cu succes.");
    } else {
      reject("Whoops! Ceva nu e bine.");
    }
  }, 2000);
});

promise1
  .then((fulfilled) => console.log(fulfilled))
  .catch((message) => console.log(message))
  .finally(() => console.log("indiferent de rezultat"));

console.log("dupa promise");

// Fetch API
const baseURL = "https://reqres.in/api";

const endpoints = {
  getAllUsers: "/users",
  getSingleUser: "/users/1",
};

const loader = document.querySelector("#loader");

setTimeout(() => (loader.style.display = "none"), 1500);

fetch(`${baseURL}${endpoints.getAllUsers}`)
  .then((response) => response.json())
  .then((json) => {
    console.clear();
    console.log(json);
    console.log("DONE FETCHING");
    // loader.style.display = "none";
  })
  .catch((err) => console.log(err.message));

fetch(`${baseURL}${endpoints.getSingleUser}`)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err.message));
