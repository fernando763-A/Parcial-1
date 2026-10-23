const formulario = document.getElementById("formulario");
const celsius = document.getElementById("celsius");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const temperatura = celsius.valueAsNumber;

    if (celsius.value.trim() === "" ||
        !Number.isFinite(temperatura)) {
        resultado.textContent = "Ingrese una temperatura válida.";
        return;
    }

    const fahrenheit = (temperatura * 9 / 5) + 32;

    resultado.textContent =
        temperatura + " °C = " +
        fahrenheit.toFixed(2) + " °F";
});