// definim o functie cu numele numeFunctie
function numeFunctie(numberOne, numberTwo) {
  const sum = numberOne + numberTwo;

  return sum;
}
// apleam functia cu numele numeFunctie
console.log(numeFunctie(11, 22));

function printNameToConsole(nameToPrint) {
  console.log("Numele meu este " + nameToPrint);
}

printNameToConsole("Bob");
printNameToConsole("Alice");
printNameToConsole("Steve");

// template string / template literals
function printNameToConsoleTwo(nameToPrint) {
  console.log(`Numele meu este ${nameToPrint}`);
}

printNameToConsoleTwo("Alex");

// console.log(nameToPrint); da eroare pentru ca nameToPrint este disponibil
// doar in printNameToConsole si in printNameToConsoleTwo

function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum, sum(), sum(1), sum(1, 3));
/*
VA RETURNA:
    codul functiei,
    NaN = Not a Number,
    NaN = Not a Number,
    4
*/

function workingSum(n1, n2) {
  if (n1 === undefined) {
    return "n1 is not defined";
  }

  if (n2 === undefined) {
    return "n2 is not defined";
  }

  return n1 + n2;
}

console.log(workingSum(3));

// workingSum DAR folosim if / else if / else
function workingSumTwo(n1, n2) {
  if (n1 === undefined) {
    return "n1 is not defined";
  } else if (n2 === undefined) {
    return "n2 is not defined";
  } else if (typeof n1 === "string") {
    return "n1 is not a number";
  } else if (typeof n2 === "string") {
    return "n2 is not a number";
  } else {
    return n1 + n2;
  }
}

console.log(workingSumTwo("1", 2));

const debugging = false;

if (debugging) {
  console.log("DEBUGGING mode: ON");
}

function debugLog(arg) {
  if (debugging) {
    console.log(arg);
  }
}

debugLog("Apar doar daca esti in debug mode");
debugLog("Esti in consola");
debugLog({
  firstName: "Alex",
  lastName: "Zmed",
});

function printOnlyIfNumber(n) {
  if (typeof n !== "number") {
    return;
  }

  console.log(n);
}

console.log("=========================");
printOnlyIfNumber(1);
printOnlyIfNumber("1");
printOnlyIfNumber([1]);
printOnlyIfNumber({ n: 1 });
printOnlyIfNumber(1.11);

for (let i = 0; i < 10; i++) {
  console.log("for is at i = ", i);
}

/* 
let i = 0 - De unde incepem sa iteram
i < 10 - De cate ori iteram
i++ (i = i + 1) - incrementam i dupa fiecare console.log
*/

let i = 0;

while (i < 11) {
  console.log("while is at i = ", i);
  i++;
}

console.log("=========================");
const names = ["Bob", "Alice", "Steve", "Alex"];
console.log(names[0]); // Bob
console.log(names.length); // 3

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let j = 0;

while (j < names.length) {
  console.log(names[j]);
  j++;
}

console.log("============== EXERCITII ============");

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

// users[0].name
// users[1].name

const processedUsers = [];

for (let index = 0; index < users.length; index++) {
  const {
    name,
    email,
    phone,
    address: {
      geo: { lat, lng },
    },
  } = users[index];

  processedUsers[index] = {
    name,
    email,
    phone,
    lat,
    lng,
  };
}

console.log(processedUsers);

const user = {
  id: 10,
  name: "Clementina DuBuque",
  username: "Moriah.Stanton",
  email: "Rey.Padberg@karina.biz",
  address: {
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "31428-2261",
    geo: {
      lat: "-38.2386",
      lng: "57.2232",
    },
  },
  phone: "024-648-3804",
  website: "ambrose.net",
  company: {
    name: "Hoeger LLC",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models",
  },
};

console.log("====== Object destructuring");

console.log(user.id);

const { username, email, phone } = user;

console.log(user.username, username);

function printCurrentUserDetails({ name, phone, email }) {
  console.log(`Name: ${name} \nEmail: ${email} \nPhone: ${phone}`);
}

printCurrentUserDetails(users[0]);
printCurrentUserDetails(users[1]);
printCurrentUserDetails(users[2]);
printCurrentUserDetails(users[3]);
printCurrentUserDetails(users[4]);
