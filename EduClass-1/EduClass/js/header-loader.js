const HEADER_PATH = "./partials/header.html";

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const template = document.createElement("template");
        const res = await fetch(HEADER_PATH);
        const headerHTML = await res.text();
        template.innerHTML = headerHTML;
        const encabezado = document.querySelector(".encabezado");
        encabezado.append(template.content);
    } catch (error) {
        console.error("Error cargando header:", error);
    }
});