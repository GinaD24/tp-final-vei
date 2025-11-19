let regexLetras = /^[a-zA-Z]+$/;
let botonInicio = document.querySelector('.login-btn');
let mensaje = document.querySelector('.error');


if(botonInicio) {
    botonInicio.addEventListener("click", (e) => {
        e.preventDefault();
        validarInicio();
    });
}

function validarInicio() {
    let error = false;
    let mensajeError = "";

    let usuario = document.querySelector("#usuario");
    let password = document.querySelector("#password");

    if(usuario.value === "" || password.value === "") {
        error = true;
        mensajeError += "<p>Todos los campos deben estar completos</p>";
    }
    if (regexLetras.test(usuario.value)) {
        error = true;
        mensajeError += "<p>El campo dni solo admite números</p>";
    }
    if(error) {
        mensaje.innerHTML = mensajeError;
    } else {
        window.location.href = "home.html";
    }
}
