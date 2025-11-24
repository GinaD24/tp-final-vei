const FOOTER_PATH = "./partials/footer.html";

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const template = document.createElement("template");
        const res = await fetch(FOOTER_PATH);
        const footerHTML = await res.text();
        template.innerHTML = footerHTML;
        const pie = document.querySelector(".pie");
        pie.append(template.content);
    } catch (error) {
        console.error("Error cargando footer:", error);
    }
});