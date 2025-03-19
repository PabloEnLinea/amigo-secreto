const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function actualizarListaAmigos() {
    ulListaAmigos.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = ""; // Limpiar el input
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto elegido es: ${amigoSecreto}</li>`;
}
