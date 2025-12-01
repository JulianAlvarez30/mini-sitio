const form = document.getElementById("form-contacto");
const mensaje = document.getElementById("mensaje-exito");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  mensaje.classList.remove("oculto");
  form.reset();
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-contacto");
    const mensaje = document.querySelector("#mensaje-exito");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        mensaje.classList.remove("oculto");
    });
});
