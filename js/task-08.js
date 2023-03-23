const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  
  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() && password.value.trim() !== "") {
    const userInformation = {
      email: email.value,
      password: password.value,
    };
    console.log(userInformation);
    loginFormEl.reset();
  } else {
    alert("Всі поля мають бути заповнені!!!");
  }
}
