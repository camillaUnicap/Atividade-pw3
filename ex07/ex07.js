function gerar() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const linha = document.getElementById("linha");

    for (let i = 0; i <= 5; ++i) {

        switch (i) {
            case 0:
                numeros = numero1 + numero2;
                linha.innerHTML += `Soma: ${numeros} `;
                linha.innerHTML += "\n";
                break;
            case 1:
                numeros = numero1 - numero2;
                linha.innerHTML += `Subtração: ${numeros} `;
                linha.innerHTML += "\n";
                break;
            case 2:
                numeros = numero1 * numero2;
                linha.innerHTML += `Multiplicação: ${numeros} `;
                linha.innerHTML += "\n";
                break;
            case 3:
                numeros = numero1 / numero2;
                linha.innerHTML += `Divisão: ${numeros} `;
                linha.innerHTML += "\n";
                break;
            case 4:
                numeros = numero1 % numero2;
                linha.innerHTML += `Resto: ${numeros} `;
                linha.innerHTML += "\n";
                break;
            case 5:
                numeros = numero1 ** numero2;
                linha.innerHTML += `Potenciação: ${numeros} `;
                linha.innerHTML += "\n";
                break;
            default:
                console.log('default');
        }
    }

}