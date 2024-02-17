//IMC
//1- capturar os valores -ok
//2- calcular o IMC -ok
//3- gerar a classificação d IMC -ok
//4- organizar as informações 
//5- salva os dados em um array de lista de objetos
//6- ler a lista com os dados -> localStorage
//7- renderizar o conteudo na tela 
//8 botão limpar registros -> clear localStorage

function pegarValores () {
    let nome = document.getElementById("nome").value.trim();
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);

    let dadosUsuarios = {
        nomeUsuario: nome,
        alturaUsuario: altura,
        pesoUsuario: peso,

    }

   // console.log(`nome: ${dadosUsuarios.nomeUsuario}, altura: ${dadosUsuarios.alturaUsuario}, peso: ${dadosUsuarios.pesoUsuario}`)

    return dadosUsuarios;
}

function calcular(altura, peso) {

    let imc = peso / ( altura * altura);

    return imc;

}

function classificacaoImc (imc) {
    
    if(imc < 18) {
        return "abaixo do peso"
    } else if (imc < 25) {
        return "peso normal"
    } else if (imc < 30) {
        return "sobrepeso"
    } else if (imc < 35) {
        return "obesidade 1"
    } else {
        return "obesidade 2 e 3" 
    }
}

function organizarDados( dadosUsuarios, valoreImc, classificacaoImc) {

    let dataAtual = Intl.DateTimeFormat('pt-BR',{timeStyle: "long", dateStyle: "short"}).format(Date.now())//formatando data 
    let dadosUsuariosAtt = {
        ...dadosUsuarios,
        imc: valoreImc.toFixed(2),
        classificacao: classificacaoImc,
        dataCadastro: dataAtual,
    }

    return dadosUsuariosAtt;

}


function cadastrarUsuario (usuario){
    let listaUsuarios = [];

    if(localStorage.getItem("usuariosCadastrados")){
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }


    listaUsuarios.push(usuario)

    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))

}
















