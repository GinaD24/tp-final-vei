const initializeModalHandlers = () => {
    
    const modal = document.getElementById('modalCanje');
    if (!modal) return; 

    const btnVolver = document.getElementById('btnVolver');
    const canjeButtons = document.querySelectorAll('.canje-btn');
    const btnConfirmar = document.getElementById('btnConfirmarCanje');
    

    let currentCosto = 0;

    const puntosUsuarioElement = document.querySelector('.puntos-valor'); 
    let currentPuntos = parseInt(puntosUsuarioElement ? puntosUsuarioElement.textContent.trim() : '0', 10); 

    const modalItemTitulo = modal.querySelector('.modal-item-titulo');
    const modalPrecioValor = modal.querySelector('.modal-precio-valor');
    const modalItemSubtitulo = modal.querySelector('.item-subtitulo');
    const modalPuntosActuales = modal.querySelector('.modal-puntos-actuales');
    

    const hideModal = () => {
        modal.style.display = 'none';
    };

    const showModal = (itemNombre, itemDescripcion, itemCosto) => {
        modalItemTitulo.textContent = `${itemNombre.trim()} `;
        modalItemSubtitulo.textContent = `${itemDescripcion.trim()}`;
        modalPrecioValor.innerHTML = `<img src="../img/estrella-costo.png" class="estrella-icon"> ${itemCosto}`;
        modal.style.display = 'flex';
    };

    canjeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const canjeItem = event.target.closest('.canje-item');
            
            const costoStr = canjeItem.querySelector('.canje-costo').textContent.trim();
            currentCosto = parseInt(costoStr, 10); 
            
            const nombre = canjeItem.querySelector('.canje-nombre').textContent;
            const descripcion = canjeItem.querySelector('.canje-descripcion').textContent;

            showModal(nombre, descripcion, currentCosto);
        });
    });

    if (btnVolver) btnVolver.addEventListener('click', hideModal);
    

    if(btnConfirmar) {
        btnConfirmar.addEventListener('click', () => {
            validarCanje(currentCosto, currentPuntos, puntosUsuarioElement, modalPuntosActuales);
        });
    }
    
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
};


const MODAL_PATH = "../html/partials/modal-tienda.html";

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const container = document.getElementById("modal-container");
        

        const res = await fetch(MODAL_PATH);
        if (!res.ok) {
            throw new Error(`Error cargando modal: ${res.status} ${res.statusText}`);
        }
        const modalHTML = await res.text();
        
        if (container) {
            container.innerHTML = modalHTML;
            
            const modal = document.getElementById('modalCanje');
            if (modal) {
                modal.style.display = 'none'; 
            }
            
            initializeModalHandlers();
        } else {
            console.error("Error: No se encontró el elemento #modal-container en el DOM.");
        }

    } catch (error) {
        console.error("Error cargando el modal:", error);
    }
});


function validarCanje(costo, puntosUsuario, puntosUsuarioElement, modalPuntosActuales){

    if(puntosUsuario >= costo){

        const nuevosPuntos = puntosUsuario - costo;

        if (puntosUsuarioElement) {
            puntosUsuarioElement.innerHTML = `<img src="../img/estrella.png" class="estrella-icon"> ${nuevosPuntos}`;
        }
        if (modalPuntosActuales) {
            modalPuntosActuales.innerHTML = `<img src="../img/estrella.png" class="estrella-icon"> ${nuevosPuntos}`;
        }

        const modal = document.getElementById('modalCanje');
        if(modal) {
             modal.style.display = 'none';
        }
        
    } else {

        alert(`Puntos insuficientes. Necesitas ${costo} puntos y solo tienes ${puntosUsuario}.`);
    }
}
