let button = document.getElementById("btn");
let loginInput = document.getElementById("login");
let passwordInput = document.getElementById("password");
let adminRadio = document.getElementById("adminRadio");
let notAdminRadio = document.getElementById("notAdminRadio");

button.addEventListener('click', () => {
    let isAdmin = adminRadio.checked;

    let newUser = {
        login: loginInput.value,
        password: passwordInput.value,
        role: isAdmin ? "Admin" : "User"
    }

    console.log(newUser);
})