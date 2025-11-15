const SIDEBAR_PATH = "./partials/sidebar.html";

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const sidebar = document.getElementById("sidebar");
        const template = document.createElement("template");
        const res = await fetch(SIDEBAR_PATH);
        const sidebarHTML = await res.text();
        template.innerHTML = sidebarHTML;
        sidebar.appendChild(template.content);
    } catch (error) {
        console.error("Error cargando sidebar:", error);
    }
});