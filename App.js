var palabras

function elegirPalabraAzar(lista) {
    return lista[Math.floor(Math.random() * palabras.length)];
}

function mostrar(texto) {
    var caja = document.getElementById("caja");
    caja.value = texto
}

function construirArray() {
    return document.getElementById("texto").value.trim().split("\n");
}

function mostrarEditor(palabras) {
    var z = document.getElementById("mostrar-ocultar");
    z.style.display = "block"
}

function ocultarEditor() {
    var x = document.getElementById("mostrar-ocultar");
    x.style.display = "none"
    localStorage.setItem("texto", document.getElementById("texto").value)
    palabras = construirArray();
}

function init() {
    document.getElementById("texto").value = localStorage.getItem("texto");
    palabras = construirArray();
    mostrar(elegirPalabraAzar(palabras));
}
init();