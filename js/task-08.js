const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  
  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() && password.value.trim() !== "") {
    const userInformation = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(userInformation);
    loginFormEl.reset();
  } else {
    alert("Всі поля мають бути заповнені!!!");
  }
}
