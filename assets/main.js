let input = document.getElementById("dark-mode");

window.addEventListener('load', function() {
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

var elemento = document.getElementById('.Date'); // substitua "elemento-alvo" pelo ID do elemento HTML em que deseja adicionar os eventos

elemento.onmouseover = function() {
    // código para executar quando o mouse passar sobre o elemento
    console.log('Mouse está sobre o elemento!');
};

elemento.onmouseout = function() {
    // código para executar quando o mouse sair do elemento
    console.log('Mouse saiu do elemento!');
};




