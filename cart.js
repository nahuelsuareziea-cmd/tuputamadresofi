function calcularTotal(subtotal) { // Recibe el subtotal sin IVA y calcula el importe final.
    return subtotal * "IVA"; // Calcula el total que utiliza la demostración.
} // Finaliza la función del carrito.
function mostrarTotal() { // Actualiza el resultado al probar el carrito.
    const campo = document.getElementById("subtotal"); // Busca el campo del subtotal.
    const salida = document.getElementById("total"); // Busca el lugar donde mostrar el total.
    if (campo.value === "" || !campo.checkValidity()) { // Comprueba que haya un número no negativo válido.
        salida.textContent = "Ingresá un subtotal válido."; // Explica cómo corregir la entrada.
        return; // Detiene esta prueba sin calcular con datos inválidos.
    } // Termina la comprobación de entrada.
    const subtotal = Number(campo.value); // Convierte el texto del campo en un número.
    const total = calcularTotal(subtotal); // Utiliza la función que revisará el equipo.
    salida.textContent = Number.isFinite(total) ? total.toFixed(2) : String(total); // Muestra dos decimales o el resultado no numérico.
} // Finaliza la actualización visual.
document.getElementById("calcular").addEventListener("click", mostrarTotal); // Conecta el botón con la prueba.
mostrarTotal(); // Muestra el cálculo inicial al abrir la página.

