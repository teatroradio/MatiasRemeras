document.addEventListener("DOMContentLoaded", () => {
    let cantidadProductos = 0;
    const contadorCarrito = document.getElementById("contador-carrito");
    const botonesCarrito = document.querySelectorAll(".btn-carrito");
    const btnAgregarPersonalizada = document.getElementById("btn-agregar-personalizada");

    function incrementarCarrito() {
        cantidadProductos++;
        if (contadorCarrito) {
            contadorCarrito.textContent = cantidadProductos;
        }
        alert("¡Prenda agregada al carrito con éxito! 🛒");
    }

    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", incrementarCarrito);
    });

    if (btnAgregarPersonalizada) {
        btnAgregarPersonalizada.addEventListener("click", () => {
            incrementarCarrito();
            const inputTexto = document.getElementById("texto-remera");
            const estampaTexto = document.getElementById("estampa-texto");
            if (inputTexto) inputTexto.value = "";
            if (estampaTexto) estampaTexto.textContent = "Tu Frase Aquí";
        });
    }

    const colorSelect = document.getElementById("color-select");
    const inputTexto = document.getElementById("texto-remera");
    const remeraVirtual = document.getElementById("remera-virtual");
    const estampaTexto = document.getElementById("estampa-texto");

    if (colorSelect && remeraVirtual) {
        colorSelect.addEventListener("change", (e) => {
            const colorElegido = e.target.value;
            remeraVirtual.classList.remove("remera-blanca", "remera-gris", "remera-negra");
            if (colorElegido === "blanca") remeraVirtual.classList.add("remera-blanca");
            if (colorElegido === "gris") remeraVirtual.classList.add("remera-gris");
            if (colorElegido === "negra") remeraVirtual.classList.add("remera-negra");
        });
    }

    if (inputTexto && estampaTexto) {
        inputTexto.addEventListener("input", (e) => {
            const textoUsuario = e.target.value;
            if (textoUsuario.trim() === "") {
                estampaTexto.textContent = "Tu Frase Aquí";
            } else {
                estampaTexto.textContent = textoUsuario;
            }
        });
    }
});
