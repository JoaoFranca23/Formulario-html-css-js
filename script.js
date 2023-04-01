const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfimation = document.getElementById("passwordConfimation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfimationValue = passwordConfimation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de  usuário é obrigatorio.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email obrigatório");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "por favor, insira um email valido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Senha obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "Sua senha deve ter 7 caracteres ou mais.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfimationValue === "") {
    setErrorFor(passwordConfimation, "A confirmação da senha é obrigatoria.");
  } else if (passwordConfimationValue !== passwordValue) {
    setErrorFor(
      passwordConfimation,
      "sua confirmação de senha está diferente da sua senha."
    );
  } else {
    setSuccessFor(passwordConfimation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control sucess";
  });
  if (formIsValid) {
    console.log("o formulario está 100% valido");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //add a msg de erro
  small.innerHTML = message;

  //add a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;

  //add a classe de sucesso

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
