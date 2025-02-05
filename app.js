// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo al arreglo y actualizar la lista en la UI
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualiza el arreglo de amigos
    amigos.push(nombre);

    // Actualiza la lista visual de amigos en el HTML
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    // Limpia el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    // Limpia la lista existente
    lista.innerHTML = "";
    
    // Itera sobre el arreglo y crea un elemento <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
