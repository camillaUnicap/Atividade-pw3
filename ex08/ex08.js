function calcular() {
    let numero = parseFloat(document.getElementById("numero").value);
    const linha = document.getElementById("linha");

    var nota200count = 0; var nota100count = 0; var nota50count = 0; var nota20count = 0;
    var nota10count = 0; var nota5count = 0; var nota2count = 0;
    var moeda1count = 0; var moeda50count =0 ; var moeda25count = 0; var moeda10count = 0;
    var moeda5count = 0; var moeda01count =0;

        if(numero < 1) {
            alert("Valor invalido!");
        } else {
            while(numero >= 200) {
                numero = numero - 200;
                nota200count++;
              }
            while(numero >= 100) {
              numero = numero - 100;
              nota100count++;
            }
            while(numero >= 50) {
                numero = numero - 50;
                nota50count++;
            }
            while(numero >= 20) {
                numero = numero - 20;
                nota20count++;
            }
            while(numero >=10) {
                numero = numero - 10;
                nota10count++;
            }
            while(numero >=5) {
                numero = numero - 5;
                nota5count++;
            }
            while(numero >=2) {
                numero = numero - 2;
                nota2count++;
            }
            while(numero >=1) {
                numero = numero - 1;
                moeda1count++;
            }
            while(numero >=0.50) {
                numero = numero - 0.50;
                moeda50count++;
            }
            while(numero >=0.25) {
                numero = numero - 0.25;
                moeda25count++;
            }
            while(numero >=0.10) {
                numero = numero - 0.10;
                moeda10count++;
            }
            while(numero >=0.05) {
                numero = numero - 0.05;
                moeda5count++;
            }
            while(numero >=0.01) {
                numero = numero - 0.01;
                moeda01count++;
            }

            if(nota200count > 0) {
                linha.innerHTML += `${nota200count} nota de $200,00 reais, `;
            }
            if(nota100count >0) {
                linha.innerHTML += `${nota100count} nota de $100,00 reais, `;
            }
            if(nota50count > 0) {
                linha.innerHTML += `${nota50count} nota de $50,00 reais, `;
            }
            if(nota20count > 0) {
                linha.innerHTML += `${nota20count} nota de $20,00 reais, `;
            }
            if(nota10count > 0) {
                linha.innerHTML += `${nota10count} nota de $10,00 reais, `;
            }
            if(nota5count >0) {
                linha.innerHTML += `${nota5count} nota de $5,00 reais, `;
            }
            if(nota2count > 0) {
                linha.innerHTML += `${nota2count} nota de $2,00 reais, `;
            }
            if(moeda1count > 0) {
                linha.innerHTML += `${moeda1count} moeda de $1,00 real, `;
            }
            if(moeda50count > 0) {
                linha.innerHTML += `${moeda50count} moeda de $0,50 centavos, `;
            }
            if(moeda25count > 0) {
                linha.innerHTML += `${moeda25count} moeda de $0,25 centavos, `;
            }
            if(moeda10count >0) {
                linha.innerHTML += `${moeda10count} moeda de $0,10 centavos, `;
            }
            if(moeda5count > 0) {
                linha.innerHTML += `${moeda5count} moeda de $0,05 centavos, `;
            }
            if(moeda01count > 0) {
                linha.innerHTML += `${moeda01count} moeda de $0,01 centavos, `;
            }

            // console.log("notas de $200:" + nota200count);
            // console.log("notas de $100:" + nota100count);
            // console.log("notas de $50:" + nota50count);
            // console.log("notas de $20:" + nota20count);
            // console.log("notas de $10:" + nota10count);
            // console.log("notas de $5:" + nota5count);
            // console.log("notas de $2:" + nota2count);
            // console.log("moeda de $1:" + moeda1count);
            // console.log("moeda de $0.50:" + moeda50count);
            // console.log("moeda de $0.25:" + moeda25count);
            // console.log("moeda de $0.10:" + moeda10count);
            // console.log("moeda de $0.5:" + moeda5count);
            // console.log("moeda de $0.1:" + moeda01count);
        }
}