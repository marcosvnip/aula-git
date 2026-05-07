import './style.css'
 const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valido = true;

    erroEmail.textContent = "";
    erroSenha.textContent = "";

    if (email.value.trim() === "") {
        erroEmail.textContent = "Digite seu e-mail";
        valido = false;
    }

    if (senha.value.trim() === "") {
        erroSenha.textContent = "Digite sua senha";
        valido = false;
    }

}
);

email.addEventListener("input", () => {
    if (email.value.trim() !== "") {
        erroEmail.textContent = "";
    }
});

senha.addEventListener("input", () => {
    if (senha.value.trim() !== "") {
        erroSenha.textContent = "";
    }
});