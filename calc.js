//criar constante visor que recebe o elemento com id visor
const visor = document.getElementById('visor');

//função que adiciona o caractere ao visor
function adicionarCaractere(caractere) {
    if (visor.value === '0') {
        visor.value = caractere;
    } else {
        visor.value += caractere;
    }
}

//função que limpa o visor
function limparVisor() {
    visor.value = '0';
}

//função que calcula a expressão no visor
function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (erro) {
        visor.value = 'Erro';
    }
}