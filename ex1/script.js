function visitarCidade(){

const nome = prompt("Qual o seu nome?");
let visitouCidade = prompt("Ja visitou alguma cidade? \n Sim \n Não");
let listaNomeCidade = [];

if(visitouCidade.toLowerCase() === "não" || visitouCidade.toLowerCase() === "nao"){
    alert(nome + " Não visitou nenhuma cidade");

} else if(visitouCidade.toLowerCase() === "sim") {
        while(visitouCidade === "sim"){     
            cidadeNome = prompt("Qual cidade?"); // pergunta a cidade

                listaNomeCidade.push(cidadeNome);

                visitouCidade = prompt("Mais alguma cidade?").toLowerCase();
                if(visitouCidade.toLowerCase() === "nao" ||visitouCidade.toLowerCase() ===  "não"){
                break;
            }
}
            const respostasComoString = listaNomeCidade.join(" \n")

    alert(nome + " vistou ao total de: " + listaNomeCidade.length + "\ne visitou as seguintes cidades: \n" + respostasComoString); // resposta
    alert("Obrigado por responder!"); 

} else{
    alert("Insira uma resposta válida")
}
}

visitarCidade()