function teste() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;


    console.log(nome);
    alert("Olá, " + nome + " " + sobrenome);
}

function limpar() {
    document.getElementById( "nome").value = "" ;
}
function limpar1() {
    document.getElementById( "sobrenome").value = "" ;
}
