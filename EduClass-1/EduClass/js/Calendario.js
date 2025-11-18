document.addEventListener("DOMContentLoaded", () => {

    const filtro = document.querySelector("#filtroCalendario");
    const dias = document.querySelectorAll(".tabla-calendario td");
    const leyenda = document.querySelector("#leyendaAsistencias"); 

    const fechasEvaluaciones = {
        1: { materia: "Geografía", temas: ["Mapas", "Capitales de las provincias Argentinas"] },
        9: { materia: "Matemáticas", temas: ["Ecuaciones", "Inecuaciones", "Problemas"] },
        19: { materia: "Biología", temas: ["Células", "Genética"] },
        7: { materia: "Lengua", temas: ["Análisis de texto"] },
        14: { materia: "Historia", temas: ["Revolución de Mayo"] }
    };

    
    const fechasEntrega = {
        4: { materia: "Lengua", temas: ["Entrega de informe escrito"] },
        15: { materia: "Historia", temas: ["TP Segunda Guerra Mundial"] }
    };


    const asistencias = {
        1: "presente",
        2: "tarde",
        3: "ausente",
        4: "presente",
        5: "justificada",
        6: "presente",
        7: "presente",
        8: "tarde",
        9: "presente",
        10: "ausente",
        11: "presente",
        12: "presente",
        13: "justificada",
        14: "presente",
        15: "presente",
        16: "presente",
        17: "tarde",
        18: "presente",
        19: "presente",
        20: "ausente",
        21: "presente",
        22: "presente",
        23: "presente",
        24: "presente",
        25: "tarde",
        26: "presente",
        27: "presente",
        28: "ausente",
        29: "presente",
        30: "presente"
    };


    function limpiarDias() {
        dias.forEach(dia => {
            dia.classList.remove("evaluacion", "entrega");

            const info = dia.querySelector(".info");
            const bola = dia.querySelector(".asistencia-dia");

            if (info) info.remove();
            if (bola) bola.remove();

            dia.textContent = dia.id.replace("d", "").replace("b", "");
        });

        leyenda.style.display = "none"; 
    }

    function aplicarEventos(eventos, claseCss) {
        dias.forEach(dia => {
            const numero = parseInt(dia.textContent);

            if (eventos[numero]) {
                dia.classList.add(claseCss);

                const info = document.createElement("div");
                info.classList.add("info");
                info.innerHTML = `
                    <strong>${eventos[numero].materia}</strong><br>
                    <span>Temas:</span><br>
                    ${eventos[numero].temas.map(t => `- ${t}`).join("<br>")}
                `;
                dia.appendChild(info);
            }
        });
    }

  
    function aplicarAsistencias() {
        dias.forEach(dia => {
            const numero = parseInt(dia.textContent);

            if (asistencias[numero]) {
                dia.textContent = "";

                const bola = document.createElement("div");
                bola.classList.add("asistencia-dia", asistencias[numero]);
                bola.textContent = numero;

                dia.appendChild(bola);
            }
        });

        leyenda.style.display = "block"; 
    }

    filtro.addEventListener("change", () => {
        limpiarDias();

        if (filtro.value === "fechaEvaluaciones") {
            aplicarEventos(fechasEvaluaciones, "evaluacion");
        }

        if (filtro.value === "fechaEntrega") {
            aplicarEventos(fechasEntrega, "entrega");
        }

        if (filtro.value === "asistencias") {
            aplicarAsistencias();
        }
    });
});
