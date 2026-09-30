const visor = document.getElementById('visor');

function adicionarCaractere(caractere) {
    if (visor.value === '0') {
        visor.value = caractere;
    } else {
        visor.value += caractere;
    }
}

function limparVisor() {
    visor.value = '0';
}

function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (erro) {
        visor.value = 'Erro';
    }
}