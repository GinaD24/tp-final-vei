document.addEventListener("DOMContentLoaded", async function () {
    try {
        const sidebar = document.getElementById("sidebar");
        const template = document.createElement("template");

        const path = window.location.pathname;

        let SIDEBAR_PATH = "./partials/sidebar.html"; // default

        if (path.includes("materia.html")) {
            SIDEBAR_PATH = "./partials/sidebar-materia.html";
        }

                if (path.includes("actividad.html")) {
            SIDEBAR_PATH = "./partials/sidebar-materia.html";
        }

          if (path.includes("materia-mensajeria.html")) {
            SIDEBAR_PATH = "./partials/sidebar-materia-mensajeria.html";
        }

        const res = await fetch(SIDEBAR_PATH);
        const html = await res.text();
        template.innerHTML = html;
        sidebar.appendChild(template.content);

    } catch (error) {
        console.error("Error cargando sidebar:", error);
    }
});