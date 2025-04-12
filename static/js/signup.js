const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.querySelector(".sign-in form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector(".sign-in input[type='email']").value;
    const password = document.querySelector(".sign-in input[type='password']").value;

    if (email && password) {
        
        localStorage.setItem("userLoggedIn", "true");
        window.location.href = "dashboard.html";  
    } else {
        alert("Please enter email and password.");
    }
});


// window.onload = function () {
//     if (localStorage.getItem("userLoggedIn")) {
//         window.location.href = "dashboard.html"; 
//     }
// };

