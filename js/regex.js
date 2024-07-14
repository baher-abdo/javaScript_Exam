
const nameInput = document.getElementById("inputName")
const phoneInput = document.getElementById("inputPhone")
const emailInput = document.getElementById("inputEmail")
const ageInput = document.getElementById("inputAge")
const passwordInput = document.getElementById("inputPassword")
const repasswordInput = document.getElementById("inputRepassword")
const btnSubmit = document.getElementById("submit")

let checkName;
let checkPhone;
let checkEmail;
let checkAge;
let checkPassword;
let checkRepassword;


nameInput.addEventListener("keyup", (e) => {
  let regexName = /^[a-z A-Z]{3,20}$/g;
  let checkValue = regexName.test(nameInput.value);
  checkName = checkValue;
    validationName()
    checkData()
});

emailInput.addEventListener("keyup", () => {
  let regexEmail = /^([a-zA-Z0-9_.]{3,})@([a-zA-Z]{2,})[.]([a-zA-Z]{2,3})$/g;
  let checkValue = regexEmail.test(emailInput.value);
  checkEmail = checkValue;
    validationEmail()
    checkData()
});


passwordInput.addEventListener("keyup", () => {
  let regexPassword = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{3,}$/g
  let checkValue = regexPassword.test(passwordInput.value);
  checkPassword = checkValue;
    validationPass()
    checkData()
});

repasswordInput.addEventListener("keyup", () => {
  let regexRepassword = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{3,}$/g
  let checkValue = regexRepassword.test(repasswordInput.value);
  checkRepassword = checkValue;
    validationRepass()
    checkData()
    matchPass()
});

phoneInput.addEventListener("keyup", () => {
  let regexPhone = /^[+]?[a-zA-Z0-9]{11,}$/g;
  let checkValue = regexPhone.test(phoneInput.value);
  checkPhone = checkValue;
    validationPhone()
    checkData()
});

ageInput.addEventListener("keyup", () => {
  let regexAge = /^[0-9]{1,2}$/g;
  let checkValue = regexAge.test(ageInput.value);
  checkAge = checkValue;
    validationAge()
    checkData()
});


function validationName() {
  if (!checkName) {
    nameInput.classList.add("is-invalid");
  } else {
    nameInput.classList.remove("is-invalid");
  }
}

function validationEmail() {
  if (!checkEmail) {
      emailInput.classList.add("is-invalid");
    } else {
      emailInput.classList.remove("is-invalid");
  }
}

function validationPass() {
  if (!checkPassword) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.remove("is-invalid");
  }
}

function validationRepass() {
  if (!checkRepassword) {
    repasswordInput.classList.add("is-invalid");
  } else {
    
    repasswordInput.classList.remove("is-invalid");
  }
}


function validationPhone() {
  if (!checkPhone) {
    phoneInput.classList.add("is-invalid");
  } else {
    
    phoneInput.classList.remove("is-invalid");
  }
}

function validationAge() {
  if (!checkAge) {
    ageInput.classList.add("is-invalid");
  } else {
    ageInput.classList.remove("is-invalid");
  }
}


function matchPass() {
    if (repasswordInput.value != passwordInput.value) {
        repasswordInput.classList.add("is-invalid")
        btnSubmit.classList.add("disabled")

    }
}

function checkData() {
    if (checkName && checkPhone && checkEmail && checkAge && checkPassword && checkRepassword) {
        btnSubmit.classList.remove("disabled")
    } else {
        btnSubmit.classList.add("disabled")
    }
}