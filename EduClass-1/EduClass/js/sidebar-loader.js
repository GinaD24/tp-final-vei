document.addEventListener("DOMContentLoaded", async function () {
    try {
        const sidebar = document.getElementById("sidebar");
        const template = document.createElement("template");

        const path = window.location.pathname;

        let SIDEBAR_PATH = "./partials/sidebar.html"; // default

        if (path.includes("materia.html") || path.includes("materia-realizar-tarea.html")) {
            SIDEBAR_PATH = "./partials/sidebar-materia.html";
        }

        if (path.includes("materia-mensajeria.html")) {
            SIDEBAR_PATH = "./partials/sidebar-materia-mensajeria.html";
        }
        if (path.includes("materia-contenidos.html")) {
            SIDEBAR_PATH = "./partials/sidebar-materia-contenidos.html";
        }

        const res = await fetch(SIDEBAR_PATH);
        const html = await res.text();
        template.innerHTML = html;
        sidebar.appendChild(template.content);

        activarSideBar();

    } catch (error) {
        console.error("Error cargando sidebar:", error);
    }
});

function activarSideBar() {
    const tienda = document.getElementById("tienda");
    const home = document.getElementById("home");
    const calendario = document.getElementById("calendario");
    const asignatura = document.getElementById("asignatura");

    tienda.classList.remove("activo");
    home.classList.remove("activo");
    calendario.classList.remove("activo");
    asignatura.classList.remove("activo");

    if (window.location.pathname.includes("tienda")) {
        tienda.classList.add("activo");
    }
    else if (window.location.pathname.includes("calendario")) {
        calendario.classList.add("activo");
    }
    else if (window.location.pathname.includes("asignatura")) {
        asignatura.classList.add("activo");
    } else {
        home.classList.add("activo");
    }
}