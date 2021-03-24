const loginBtn = document.querySelector("#button-login");
const inputsRegister = document.querySelectorAll(".input-register");
const user = document.querySelector("#user-email-phone");
const inputsGender = document.querySelectorAll(".input-gender");
const otherGender = document.querySelector("#custom");
const registerBtn = document.querySelector("#facebook-register");

function validatesInputs() {
  let validInputs = true;
  for (let i = 0; i < inputsRegister.length; i += 1) {
    if (!inputsRegister[i].value) {
      console.log(inputsRegister[i]);

      validInputs = false;
    }
  }
  return validInputs;
}

function validatesGender() {
  let validGender = false;
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      validGender = true;
    }
  }
  return validGender;
}

function selectGender() {
  for (let i = 0; i < inputsGender.length; i += 1) {
    if (inputsGender[i].checked) {
      return inputsGender[i].value;
    }
  }
}

function validatesRegister() {
  let valid = true;
  const error = document.querySelector("#invalid-input");

  if (!validatesInputs() || !validatesGender()) {
    error.style.color = "red";
    valid = false;
  }
  return valid;
}

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const res = user.value;
  return alert(res);
});

inputsGender.forEach((gender) => {
  gender.addEventListener("click", () => {
    document.querySelector("#input-custom ").style.display = "none";
  });
});

otherGender.addEventListener("click", () => {
  document.querySelector("#input-custom ").style.display = "block";
});

registerBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (validatesRegister()) {
    const rightContent = document.querySelector(".right-content");

    rightContent.innerHTML = `
    <p class="user-register">
    Hello, ${inputsRegister[0].value} ${inputsRegister[1].value}!</p>
    <hr>
    <p class="user-register"><strong>Successful registration.</strong></p>
    <p class="user-register"><strong>Email:</strong>
    ${inputsRegister[2].value}</p>
    <p class="user-register"><strong>Birthday:</strong>
    ${inputsRegister[4].value}</p>
    <p class="user-register"><strong>Gender:</strong>
    ${selectGender()}</p>
  `;
  }
});
