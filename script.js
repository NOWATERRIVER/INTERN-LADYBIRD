const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

// ===== LOGIN FORM VALIDATION =====
document.querySelector(".login form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("user");
  const password = document.getElementById("pass");

  const userError = document.getElementById("userError");
  const passError = document.getElementById("passError");

  let valid = true;

  // Reset
  username.classList.remove("error");
  password.classList.remove("error");
  userError.textContent = "";
  passError.textContent = "";

  const nameRegex = /^[A-Za-z]+$/;

  if (!nameRegex.test(username.value.trim())) {
    username.classList.add("error");
    userError.textContent = "Username should contain only letters.";
    valid = false;
  }

  if (password.value.length === 0) {
    password.classList.add("error");
    passError.textContent = "Password cannot be empty.";
    valid = false;
  } else if (password.value.length < 8) {
    password.classList.add("error");
    passError.textContent = "Password should be at least 8 characters.";
    valid = false;
  }

  if (valid) {
    alert("Login successful!");
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  }
});

// ===== REGISTER FORM VALIDATION =====
document.querySelector(".register form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("regUser");
  const email = document.getElementById("regEmail");
  const password = document.getElementById("regPass");

  const userError = document.getElementById("regUserError");
  const emailError = document.getElementById("regEmailError");
  const passError = document.getElementById("regPassError");

  let valid = true;

  // Reset
  username.classList.remove("error");
  email.classList.remove("error");
  password.classList.remove("error");

  userError.textContent = "";
  emailError.textContent = "";
  passError.textContent = "";

  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!nameRegex.test(username.value.trim())) {
    username.classList.add("error");
    userError.textContent = "Username should contain only letters.";
    valid = false;
  }

  if (!emailRegex.test(email.value.trim())) {
    email.classList.add("error");
    emailError.textContent = "Invalid email format.";
    valid = false;
  }

  if (!passwordRegex.test(password.value)) {
    password.classList.add("error");
    passError.textContent = "Password must include uppercase, lowercase, digit, and symbol (8+ characters).";
    valid = false;
  }

  if (valid) {
    alert("Registration successful!");
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  }
});
