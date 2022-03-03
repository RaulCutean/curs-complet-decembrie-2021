/*
window - variabila globala ce contine toate informatiile despre pagina
document - reprezinta pagina de html sub forma de obiect
*/

// DOM = Document Object Model
const documentEX = {
  html: {
    title: "Boilerplate",
    meta: [],
  },
  body: {
    h1: {
      content: "Hello world!",
    },
    button: {
      id: "btn1",
      content: "Button 1",
      style: {
        color: "red",
      },
    },
  },
};

const btn1 = document.getElementById("btn1");

// btn1.style.color = "blue";
// btn1.style.fontSize = "60px";
// btn1.style.padding = "15%";

const buttons = document.getElementsByTagName("button");

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = "green";
}

const paragraphs = document.getElementsByClassName("para1");

console.log(paragraphs[0]);

// ES5+
const p1 = document.querySelector(".para"); // returneaza 1 el
const p = document.querySelectorAll(".para"); // returneaza el[]

console.clear();
console.log("qs: ", p1);
console.log("qsa: ", p);

console.clear();
const appWrapper = document.querySelector("#app");

// appWrapper.innerText = "<p>Sunt text din javascript</p>";

// appWrapper.innerHTML += "<h1>Hello JavaScript!</h1>";

// appWrapper.innerHTML = appWrapper.innerHTML + "<h1>Hello JavaScript!</h1>";

function handleButtonClick() {
  alert("Ai dat click pe buton");
}

function getAllPosts(incomingArray) {
  incomingArray.map(({ id, title, body }) => {
    const excerpt = body.length > 20 ? body.substring(0, 60) + "[...]" : body;

    appWrapper.innerHTML += `
      <article>
        <div class="left">
          <div class="icon">${id}</div>
        </div>
        <div class="right">
          <h1>${title}</h1>
          <p>${excerpt}</p>
        </div>
      </article>
    `;
  });
}

// input

const searchInput = document.querySelector("#search");
const output = document.querySelector("#output");

function getInputValue({ value }) {
  console.log("Validating: ", value);
}

// functia asta are rolul de search (filtreaza posts)
function handleKeyUp({ value }) {
  // ne asiguram ca nu conteaza daca e litera mare in input
  const lowerCaseSearch = value.toLowerCase();
  // facem o copie a array-ului pentru a nu pierde datele initiale
  const allPosts = [...posts];

  // facem un array doar cu valorile filtrate
  const filteredPosts = allPosts.filter(({ title }) =>
    title.includes(lowerCaseSearch)
  );

  // golim continutul #app
  appWrapper.innerHTML = "";
  // printam doar postarile filtrate
  getAllPosts(filteredPosts);
}

function handleKeyDown({ value }) {
  // output.innerText = value;
  return;
}

// title

const title = document.querySelector("h1");

const handleTitleHoverStart = () => {
  title.style.color = "red";
};

const handleTitleHoverEnd = () => {
  title.style.color = "black";
};

/*
dropdown are clasa open -> afisam
la click -
 1 daca are open, stergem open
 2 daca nu are open, adaugam open
*/

function handleDropdownToggle(element) {
  if (element.classList.contains("open")) {
    element.classList.remove("open");
  } else {
    element.classList.add("open");
  }
}
