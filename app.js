// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();  
        if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
         }

    amigos.push(nombre);
    input.value = "";

    mostrarListaAmigos();
}
function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    
    listaAmigos.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    
    mostrarResultadoSorteo(amigoSorteado);
 }
 function mostrarResultadoSorteo(amigo) {
    let resultado = document.getElementById("resultado");
    
    
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = "El amigo secreto sorteado es: " + amigo;
    resultado.appendChild(li);
}

