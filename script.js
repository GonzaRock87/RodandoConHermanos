let totalVentas = 0;

function agregarVenta() {
    const ventaInput = document.getElementById("ventaInput");
    const montoVenta = parseFloat(ventaInput.value);

    if (isNaN(montoVenta) || montoVenta <= 0) {
        alert("Por favor ingrese un monto válido.");
        return;
    }

    totalVentas += montoVenta;
    document.getElementById("totalVentas").innerText = totalVentas.toFixed(2);

    ventaInput.value = "";
}