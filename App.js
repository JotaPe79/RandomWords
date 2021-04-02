var palabras = [""]

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
    guardarPalabra(document.getElementById("texto").value)
    palabras = construirArray();
}

function guardarPalabra(texto) {
    $.ajax({
        type: "POST",
        url: "https://publish.ip1.cc",
        data: { data: JSON.stringify({ data: texto }) },
    }).done(function(r) {
        window.location.hash = r.key;
    });
}

function cargarPalabraDeURL() {
    if (window.location.hash) {
        $.get(
            "https://publish.ip1.cc/storage/uploads/" + window.location.hash.substr(1) + ".json"
        ).done(function(r) {
            document.getElementById("texto").value = r.data;
            palabras = construirArray();
        });
    }
}

function init() {

    cargarPalabraDeURL();
    mostrar(elegirPalabraAzar(palabras));

}
init();

$(function() {
    cargarPalabraDeURL();
});