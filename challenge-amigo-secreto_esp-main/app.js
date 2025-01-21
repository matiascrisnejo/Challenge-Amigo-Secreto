// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim();
    if(nombre){
        amigos.push(nombre);
        console.log(nombre);
        
        limpiarCaja();
        mostrarAmigos();
    }else{
        alert("Por Favor, inserte un nombre"); 
    }
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function mostrarAmigos(){
    let arrayAmigos = document.getElementById("listaAmigos");
    arrayAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let nuevoNombre = document.createElement("li");
        nuevoNombre.textContent = amigos[i];
        arrayAmigos.appendChild(nuevoNombre);
    }
}


function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos para sortear");
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    nombreSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: ${nombreSorteado}</li>`;    
}


