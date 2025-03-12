// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Genera una lista de amigos.
let amigos = [];
const listaDeAmigos = document.getElementById("listaAmigos");
const listaAmigoSorteado = document.getElementById("resultado");
let revision = 0;

function agregarAmigo(){
    if (revision === 0){
        let ingresaAmigo = document.getElementById("amigo").value;
        if(ingresaAmigo === "" || ingresaAmigo >= 0){
            window.alert("Por favor, ingresa un valor valido.");
        } else {
            amigos.push(ingresaAmigo);
            creaLista(ingresaAmigo,listaDeAmigos);
        }
        limpiaEntrada();
    } else {
        window.alert("Reinicia la pagina para un nuevo sorteo.");
        limpiaEntrada();
    }
}


function sortearAmigo(){
    if(revision === 0){
        if (amigos.length === 0){
            //La función no se accionara.
        } else if(amigos.length === 1){
            window.alert("Ingrese más de un amigo, por favor.");
        } else{
            let amigoNumero = Math.floor((Math.random() * (amigos.length)) + 1);
            amigoNumero = amigoNumero - 1;
            let amigoElegido = `Tu amigo secreto es ${amigos[amigoNumero]}`;
            revision = 1;
            creaLista(amigoElegido,listaAmigoSorteado);
            limpiaList();
        }
    } else {
        window.alert("Reinicia la pagina para un nuevo sorteo.");
    }
}

function limpiaEntrada(){
    document.getElementById("amigo").value = "";
}

function limpiaList(){
    listaDeAmigos.innerHTML = "";
}

function creaLista(valor,Lista){
    let li = document.createElement("li"); // Crear un elemento li
    li.textContent = valor; // Asignar el texto al li
    Lista.appendChild(li); // Agregar el li a la lista ul
}