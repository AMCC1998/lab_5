let input = document.getElementById("dark-mode");

window.addEventListener('load', function () {
    var data = new Date();
    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    var dia = data.getDate();
    var mes = meses[data.getMonth()];
    var ano = data.getFullYear();

    var elemento = document.querySelector('.Date'); // substitua "elemento-alvo" pelo ID do elemento HTML em que deseja inserir a data

    elemento.innerHTML = dia + ' de ' + mes + ', ' + ano;
});


function updateBody() {

    let bodyEl = document.querySelector("body");

    if (input.checked) {
        bodyEl.classList.add("light-mode");
        document.querySelector('.dark-mode-icon').innerHTML = 'dark_mode';
    } else {
        bodyEl.classList.remove("light-mode");
        document.querySelector('.dark-mode-icon').innerHTML = 'brightness_5';
    }
}

input.addEventListener("input", () => {
    updateBody();
});


let expression = document.getElementById('expression');
let result = document.getElementById('result');

function calculate() {
    try {
        let value = eval(expression.value);
        result.innerHTML = value;
    } catch (error) {
        result.innerHTML = 'Expressão errada';
    }
}

function clearResult() {
    expression.value = '';
    result.innerHTML = '';
}

function textoPersonalizado() {
    let texto = document.getElementById('texto').value;
    document.querySelector('.section-img__texto_personalizado').innerHTML = texto;
}

function limparTextoPersonalizado() {
    document.getElementById('texto').value = '';
    document.querySelector('.section-img__texto_personalizado').innerHTML = '';
}

function posicionaNome() {
    let texto = document.getElementById('nome').value;
    var elementos = document.querySelectorAll('.section-img__nome_personalizado');

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = texto;
    }
}

function limpaNome() {
    document.getElementById('nome').value = '';
    var elementos = document.querySelectorAll('.section-img__nome_personalizado');

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = '';
    }
}


window.addEventListener("DOMContentLoaded", (event) => {

    let nav = document.querySelector('nav');
    let link_menu = document.querySelector('.link-menu-mobile');

    document.querySelector('.link-menu-mobile').addEventListener('click', function () {

        if(nav.classList.contains('hero__menu--open')){
            nav.classList.remove("hero__menu--open");
            link_menu.classList.remove("link-menu-mobile--close");

        }else{
            nav.classList.add("hero__menu--open");
            link_menu.classList.add("link-menu-mobile--close");
        }
        
    });
});




