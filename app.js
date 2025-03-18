
let amigos = [];


function adicionarAmigo() {

    let nome = document.getElementById('amigo').value;


    if (nome === '') {
        alert('Por favor, digite um nome válido.');
    } else {

        amigos.push(nome);

   
        atualizarListaAmigos();


        document.getElementById('amigo').value = '';
    }
}

function atualizarListaAmigos() {

    let listaAmigos = document.getElementById('listaAmigos');


    listaAmigos.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += '<li>' + amigos[i] + '</li>';
    }
}


function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
    } else {

        let indiceSorteado = Math.floor(Math.random() * amigos.length);


        let amigoSecreto = amigos[indiceSorteado];


        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '<li>O amigo secreto é: ' + amigoSecreto + '</li>';
    }
}