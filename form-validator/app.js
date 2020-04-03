const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  validateUsername();
  validateEmail();
  validatePassword();
}

function showError(inputEl, message) {
  const formGroup = inputEl.parentElement;
  formGroup.classList.remove('success');
  formGroup.classList.add('error');
  formGroup.querySelector('.error-msg').innerText = message;
}

function showSuccess(inputEl) {
  const formGroup = inputEl.parentElement;
  formGroup.classList.remove('error');
  formGroup.classList.add('success');
  formGroup.querySelector('.error-msg').innerText = '';
}

function isValidEmailFormat(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateUsername() {
  const min = 3;
  const max = 15;
  if (username.value === '') {
    showError(username, 'Username is required');
  } else if (username.value.length < min) {
    showError(username, `Username must be at least ${min} characters`);
  } else if (username.value.length > max) {
    showError(username, `Username must be less than ${max} characters`);
  } else {
    showSuccess(username);
  }
}

function validateEmail() {
  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmailFormat(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
}

function validatePassword() {
  const min = 6;
  const max = 25;
  if (password.value === '') {
    showError(password, 'Password is required');
  } else if (password.value.length < min) {
    showError(password, `Password must be at least ${min} characters`);
  } else if (password.value.length > max) {
    showError(password, `Password must be less than ${max} characters`);
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Confirm password is required');
  } else if (password.value !== password2.value) {
    showError(password2, 'different password');
  } else {
    showSuccess(password2);
  }
}
