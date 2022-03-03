const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const submitBtn = document.querySelector("#login");
const toast = document.querySelector("#message");
const rememberMe = document.querySelector("#remember");
const selectInput = document.querySelector("#selectInput");

const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRegExp = /\!|\@|\#|\_|\-|\d/g;

const errors = {
  email: {
    empty: "Email is required.",
    invalid: "Email address is not valid.",
  },
  password: {
    empty: "Password is required.",
    length: "Password must be at least 8 characters.",
    secure: "Password must contain a number or special character ( ! @ # _ -)",
  },
};

const account = {
  email: "alex@itschool.ro",
  password: "1234qwer",
};

// function handleLoginButtonClick(buttonElement) {
//   // dezactivam butonul sa nu dam mai multe submit
//   buttonElement.disabled = true;

//   // verificam campul de email sa nu fie gol
//   if (email.value === "") {
//     errorText.innerText = "Adresa de email este obligatorie.";
//     return;
//   }

//   // verificam campul de password sa nu fie gol
//   if (pass.value === "") {
//     errorText.innerText = "Parola este obligatorie.";
//     return;
//   }

//   // verificam adresa de email sa fie valida
//   if (!emailRegExp.test(email.value)) {
//     errorText.innerText = "Adresa de email nu este valida.";
//     return;
//   }

//   // verificam parola sa fie de minim 8 caractere
//   if (pass.value.length < 8) {
//     errorText.innerText = "Parola trebuie sa contina minim 8 caractere.";
//     return;
//   }

//   // verificam parola sa contina si un caracter special
//   if (!passRegExp.test(pass.value)) {
//     errorText.innerText =
//       "Parola trebuie sa contina o cifra sau un caracter special ( ! @ # _ - )";
//     return;
//   }
// }

function handleEnableSubmitButton() {
  submitBtn.disabled = false;
  errorText.innerText = "";
}

function handleToast(message, isError) {
  toast.innerText = message;
  isError ? toast.classList.add("error") : toast.classList.remove("error");
  toast.style.top = "1rem";
  setTimeout(() => {
    toast.style.top = "-10rem";
  }, 3000);
  setTimeout(() => {
    toast.innerText = "";
  }, 3600);
}

function handleEmailValidation() {
  const { value } = email;

  if (value === "") {
    email.style.border = "1px solid red";
    handleToast(errors.email.empty, true);
    return false;
  }

  if (!emailRegExp.test(value)) {
    email.style.border = "1px solid red";
    handleToast(errors.email.invalid, true);
    return false;
  }

  email.style.border = "1px solid #ced4da";
  return true;
}

function handlePasswordValidation() {
  const { value } = pass;

  if (value === "" || value.length < 8) {
    pass.style.border = "1px solid red";
    handleToast(errors.password.length, true);
    return false;
  }

  if (!passRegExp.test(value)) {
    pass.style.border = "1px solid red";
    handleToast(errors.password.secure, true);
    return false;
  }

  pass.style.border = "1px solid #ced4da";
  return true;
}

function handleLoginButtonClick(el) {
  el.disabled = true;
  console.log(rememberMe.checked);

  if (!handleEmailValidation() || !handlePasswordValidation()) {
    el.disabled = false;
    return;
  }

  if (email.value === account.email && pass.value === account.password) {
    handleToast("Logged in succesfully.", false);
    return;
  }

  handleToast("User not found.", true);
}

const handlePrintSelectValue = ({ value }) => {
  if (value === "") {
    handleToast("Please select country.", true);
  }

  console.log(value);
};
