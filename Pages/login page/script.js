
/*This retrieves the HTML element with the id container*/
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
const signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name) {
    alert("Name is required!");
    return;
  }

  if (!email) {
    alert("Email is required!");
    return;
  }

  if (!password) {
    alert("Password is required!");
    return;
  }

  const isValid = password.length >= 8 &&
    /[A-Za-z]/.test(password) &&
    /\d/.test(password);

  if (!isValid) {
    alert("Password must be at least 8 characters and include both letters and numbers.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert("Account created successfully!");
  signUpForm.submit();
});


const signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email) {
    alert("Email is required!");
    return;
  }

  if (!password) {
    alert("Password is required!");
    return;
  }

  const isValid = password.length >= 8 &&
    /[A-Za-z]/.test(password) &&
    /\d/.test(password);

  if (!isValid) {
    alert("Password must be at least 8 characters and include both letters and numbers.");
    return;
  }

  alert("Login successful!");
  signInForm.submit();

});