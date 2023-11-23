function calcular_imc() {
    var terminou = false;
    var totalpessoas = 0;
    var somaIMCs = 0;
    var imcMaisAlto = 0;
    var usuarioMaisAlto = '';

    while (!terminou) {
        totalpessoas++;

        var nome = prompt('Informe seu nome: ');
        var altura = parseFloat(prompt('Informe sua altura (metros): '));
        var peso = parseFloat(prompt('Informe o seu peso (kg): '));

        var imc = peso / (altura * altura);

        var classificacao;
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso normal';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Excesso de peso';
        } else if (imc < 34.9) {
            classificacao = 'Obesidade classe I';
        } else if (imc < 39.9) {
            classificacao = 'Obesidade classe II';
        } else {
            classificacao = 'Obesidade classe III';
        }

        alert(`${nome}, seu IMC é ${imc.toFixed(2)} - ${classificacao}`);

        if (imc > imcMaisAlto) {
            imcMaisAlto = imc;
            usuarioMaisAlto = nome;
        }

        var deseja_continuar = prompt('Deseja continuar? (s)im ou (n)ão');
        if (deseja_continuar.toLowerCase() === 'n') {
            terminou = true;
            var media_imc = (somaIMCs / totalpessoas).toFixed(2);

            alert(`Programa finalizado
                Usuário com o IMC mais alto foi: 
                ${usuarioMaisAlto} com IMC ${imcMaisAlto.toFixed(2)}
                Quantidade de pessoas avaliadas: ${totalpessoas}
                Média dos IMCs: ${media_imc}
            `);
        } else {
            somaIMCs += imc;
        }
    }
}

calcular_imc();