// constants
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const terms = document.querySelector("#terms");

const registerButton = document.querySelector("#registerSubmit");

const toast = document.querySelector("#toast");

const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const baseURL = "https://backend-curs.herokuapp.com/api";
const ENDPOINTS = {
  REGISTER: "/users/register",
};

// toast
function handleToast(message, isError) {
  isError && toast.classList.add("error");
  toast.innerText = message;
  toast.style.transform = "translate(-50%, 40px)";

  setTimeout(() => {
    toast.style.transform = "translate(-50%, -100%)";
  }, 3000);
  setTimeout(() => {
    toast.classList.remove("error");
    toast.innerText = "";
  }, 3600);
}

// register form submit

function clearErrors() {
  firstName.style.borderBottom = "2px solid #08bdbd";
  lastName.style.borderBottom = "2px solid #08bdbd";
  email.style.borderBottom = "2px solid #08bdbd";
  pass1.style.borderBottom = "2px solid #08bdbd";
  pass2.style.borderBottom = "2px solid #08bdbd";
}

registerButton.addEventListener("click", async () => {
  // asta vom trimite la backend
  const formValues = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: pass2.value,
  };

  // curatam erorile anterioare
  clearErrors();

  const isFirstNameValid = firstName.value.length > 2;
  const isLastNameValid = lastName.value.length > 2;
  const isEmailValid = email.value !== "" && emailRegExp.test(email.value);
  const isPasswordValid = pass1.value.length > 7 && pass1.value === pass2.value;

  if (!isFirstNameValid) {
    firstName.style.borderBottom = "2px solid #F21B3F";
  }

  if (!isLastNameValid) {
    lastName.style.borderBottom = "2px solid #F21B3F";
  }

  if (!isEmailValid) {
    email.style.borderBottom = "2px solid #F21B3F";
  }

  if (!isPasswordValid) {
    pass1.style.borderBottom = "2px solid #F21B3F";
    pass2.style.borderBottom = "2px solid #F21B3F";
  }

  if (
    !isFirstNameValid ||
    !isLastNameValid ||
    !isEmailValid ||
    !isPasswordValid
  ) {
    handleToast("Verifica datele.", true);
    return;
  }

  if (!terms.checked) {
    handleToast("Te rugam sa accepti termenii si conditiile.", true);
    return;
  }

  // totul este valid
  // alex.zmed@itschool.ro
  /*
    200 = success
    201 = created
    400 = bad request
    403 = forbidden
    404 = not found
    500 = server error
    */
  //   fetch(baseURL + ENDPOINTS.REGISTER, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formValues),
  //   })
  //     .then((response) => {
  //       if (response.status === 201) {
  //         handleToast("Contul a fost creat cu succes.", false);
  //       }
  //     })
  //     .catch((err) => handleToast(err.message, true));

  try {
    const response = await fetch(baseURL + ENDPOINTS.REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    console.log(response.status);
  } catch (err) {
    handleToast(err.message, true);
  } finally {
    console.log("indiferent ce se intampla");
  }
});
