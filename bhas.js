function calcularBhaskara() {
    //Obter os valores dos inputs
    var inputA = document.getElementById("a").value;
    var inputB = document.getElementById("b").value;
    var inputC = document.getElementById("c").value;

    const divResultado = document.getElementById("resultado");

    //Verificar se algum dos campos está vazio e avisar para o usuário
    if (inputA === "" || inputB === "" || inputC === "") {
        divResultado.style.display = "block";
        divResultado.innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    //Converter os valores para números
    var a = parseFloat(inputA);
    var b = parseFloat(inputB);
    var c = parseFloat(inputC);

    //Tornar a div visível somente quando o botão for clicado
    divResultado.style.display = "block";

    //Calcular o valor de delta
    var delta = b * b - 4 * a * c;

    //Verificar se delta é negativo
    if (delta < 0) {
        document.getElementById("resultado").innerHTML = "A equação não possui raízes reais.";
    } else {
        //Calcular as raízes
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

        //Exibir os resultados
        document.getElementById("resultado").innerHTML = "As raízes da equação são: x1 = " + x1.toFixed(1) + " e x2 = " + x2.toFixed(1);
    }
}