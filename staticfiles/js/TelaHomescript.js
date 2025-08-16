// Seleciona a imagem e o menu
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

// Adiciona evento de clique na imagem
menuIcon.addEventListener('click', function() {
    // Alterna entre mostrar ou esconder o menu
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Mostra o menu
    } else {
        menu.style.display = 'none'; // Esconde o menu
    }

});

const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const myButton3 = document.getElementById('myButton3');
// Adiciona evento de clique para o botão 1
myButton1.addEventListener('click', function () {
    if (myButton1.style.backgroundColor === 'rgb(217, 217, 217)') {
        myButton1.style.backgroundColor = '#1976D2';
        myButton1.style.color = 'white';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#D9D9D9';

        myButton2.style.color = 'black';
        myButton3.style.color = 'black';
    } else {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#D9D9D9';
        myButton1.style.color = 'black';
    }
});

// Adiciona evento de clique para o botão 2
myButton2.addEventListener('click', function () {
    if (myButton2.style.backgroundColor === 'rgb(217, 217, 217)' ) {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#1976D2';
        myButton2.style.color = 'white';
        myButton3.style.backgroundColor = '#D9D9D9';

        myButton1.style.color = 'black';
        myButton3.style.color = 'black';


    } else {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#D9D9D9';
        myButton2.style.color = 'black';
    }
});

// Adiciona evento de clique para o botão 3
myButton3.addEventListener('click', function () {
    if (myButton3.style.backgroundColor === 'rgb(217, 217, 217)') {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#1976D2';
        myButton3.style.color = 'white';

        myButton1.style.color = 'black';
        myButton2.style.color = 'black';
    } else {
        myButton1.style.backgroundColor = '#D9D9D9';
        myButton2.style.backgroundColor = '#D9D9D9';
        myButton3.style.backgroundColor = '#D9D9D9';
        myButton3.style.color = 'black';
    }
});








const tela1 = document.getElementById('tela1');
const tela2 = document.getElementById('tela2');
const tela3 = document.getElementById('tela3');


myButton1.addEventListener('click', function () {
    if (tela1.style.display === 'none' || menu.style.display === '') {
        tela1.style.display = 'block';
        tela2.style.display = 'none';
        tela3.style.display = 'none';
    } else if (myButton1.style.display === 'block'){
        tela1.style.display = 'block';
        tela2.style.display = 'none';
        tela3.style.display = 'none';
    }
});


myButton2.addEventListener('click', function () {
    if (tela2.style.display === 'none' || menu.style.display === '') {
        tela1.style.display = 'none';
        tela2.style.display = 'block';
        tela3.style.display = 'none';
    } else if (tela2.style.display === 'block'){
        tela1.style.display = 'none';
        tela2.style.display = 'block';
        tela3.style.display = 'none';
    }
});

myButton3.addEventListener('click', function () {
    if (tela3.style.display === 'none' || menu.style.display === '') {
        tela1.style.display = 'none';
        tela2.style.display = 'none';
        tela3.style.display = 'block';
    } else if (tela3.style.display === 'block'){
        tela1.style.display = 'none';
        tela2.style.display = 'none';
        tela3.style.display = 'block';
    }
});





