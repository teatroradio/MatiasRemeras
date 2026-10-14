// Esperamos a que cargue todo el documento html
document.addEventListener("DOMContentLoaded", () => {
    
    // VARIABLES DEL CARRITO
    let cantidadProductos = 0;
    const contadorCarrito = document.getElementById("contador-carrito");
    const botonesCarrito = document.querySelectorAll(".btn-carrito");

    // Función para actualizar el número del carrito con animación sencilla
    function incrementarCarrito() {
        cantidadProductos++;
        contadorCarrito.textContent = cantidadProductos;
        alert("¡Prenda agregada al carrito con éxito! 🛒");
    }

    // Escuchar clics en los botones de productos normales
    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", incrementarCarrito);
    });


    // VARIABLES DEL PERSONALIZADOR INTERACTIVO
    const colorSelect = document.getElementById("color-select");
    const inputTexto = document.getElementById("texto-remera");
    const remeraVirtual = document.getElementById("remera-virtual");
    const estampaTexto = document.getElementById("estampa-texto");
    const btnAgregarPersonalizada = document.getElementById("btn-agregar-personalizada");

    // 1. Cambiar el color de la remera dinámicamente
    colorSelect.addEventListener("change", (e) => {
        const colorElegido = e.target.value;
        
        // Removemos clases anteriores
        remeraVirtual.className = "";
        
        // Asignamos la nueva clase de color
        if (colorElegido === "blanca") remeraVirtual.classList.add("remera-blanca");
        if (colorElegido === "gris") remeraVirtual.classList.add("remera-gris");
        if (colorElegido === "negra") remeraVirtual.classList.add("remera-negra");
    });

    // 2. Modificar el texto reflejado sobre la remera en tiempo real
    inputTexto.addEventListener("input", (e) => {
        const textoUsuario = e.target.value;
        
        if (textoUsuario.trim() === "") {
            estampaTexto.textContent = "Tu Frase Aquí";
        } else {
            estampaTexto.textContent = textoUsuario;
        }
    });

    // 3. Botón para agregar la remera personalizada que armó el usuario
    btnAgregarPersonalizada.addEventListener("click", () => {
        incrementarCarrito();
        // Reseteamos el formulario de personalización de forma limpia
        inputTexto.value = "";
        estampaTexto.textContent = "Tu Frase Aquí";
    });
});
