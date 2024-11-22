let listadinamica = [];
let palavraSorteada;
let palavraCategoria;
let tentativas = 6;

const palavras = [
    palavra1={
        nome: "PRAIA",
        categoria: "LUGARES"
    },

    palavra2={
        nome: "MONTANHA",
        categoria: "LUGARES"
    },

    palavra3={
        nome: "QUADRO",
        categoria: "OBJETOS"
    },

    palavra4={
        nome: "LIVRO",
        categoria: "OBJETOS"
    },

    palavra5={
        nome: "GATO",
        categoria: "ANIMAIS"
    },

    palavra6={
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    },

    palavra7={
        nome: "PIZZA",
        categoria: "COMIDAS"
    },

    palavra8={
        nome: "SUSHI",
        categoria: "COMIDAS"
    },

    palavra9={
        nome: "TRISTEZA",
        categoria: "SENTIMENTOS"
    },

    palavra10={
        nome: "AMOR",
        categoria: "SENTIMENTOS"
    },

    palavra11={
        nome: "FLORESTA",
        categoria: "LUGARES"
    },

    palavra12={
        nome: "DESERTO",
        categoria: "LUGARES"
    },

    palavra13={
        nome: "CIDADE",
        categoria: "LUGARES"
    },

    palavra14={
        nome: "VILA",
        categoria: "LUGARES"
    },

    palavra15={
        nome: "CELULAR",
        categoria: "OBJETOS"
    },

    palavra16={
        nome: "COMPUTADOR",
        categoria: "OBJETOS"
    },

    palavra17={
        nome: "CANETA",
        categoria: "OBJETOS"
    },

    palavra18={
        nome: "MOCHILA",
        categoria: "OBJETOS"
    },

    palavra19={
        nome: "CORUJA",
        categoria: "ANIMAIS"
    },

    palavra20={
        nome: "GOLFINHO",
        categoria: "ANIMAIS"
    },

    palavra21={
        nome: "LOBO",
        categoria: "ANIMAIS"
    },

    palavra22={
        nome: "LASANHA",
        categoria: "COMIDAS"
    },

    palavra23={
        nome: "SORVETE",
        categoria: "COMIDAS"
    },

    palavra24={
        nome: "ANSIEDADE",
        categoria: "SENTIMENTOS"
    },

    palavra25={
        nome: "AMOR",
        categoria: "SENTIMENTOS"
    },
];

secreta();
function secreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSorteada = palavras[indexPalavra].nome;
    palavraCategoria = palavras[indexPalavra].categoria;

     console.log(palavraSorteada);
}

colocar();
function colocar(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSorteada.length; i++){  
        if(listadinamica[i] == undefined){
                listadinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listadinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listadinamica[i] + "</div>"
            }     
    }
}    

function verificar(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){

        mudarletra("tecla-" + letra);
        comparar(letra);
        colocar();
    }
}

function mudarletra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";

}

function comparar(letra){
    const pos = palavraSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        imagem();
        if(tentativas == 0){
        modal("kkkkk perdeu", "A palavra era: " + palavraSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                listadinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] != listadinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        modal("Acertouuu !!!", "BOA DOIDÃOOO");
        tentativas = 0;
    }
}

function imagem(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('imagens/forca1.png')";
            break;
        case 4:
                document.getElementById("imagem").style.background  = "url('imagens/forca2.png')";
            break;
        case 3:
                document.getElementById("imagem").style.background  = "url('imagens/forca3.png')";
            break;
        case 2:
                document.getElementById("imagem").style.background  = "url('imagens/forca4.png')";
            break;
        case 1:
                document.getElementById("imagem").style.background  = "url('imagens/forca5.png')";
            break;
        case 0:
                document.getElementById("imagem").style.background  = "url('imagens/forca6.png')";
            break;
         default:
                document.getElementById("imagem").style.background  = "url('imagens/forca.png')";
            break;
    
    }
}

function modal(titulo, mensagem){
    let modaltitulo = document.getElementById("exampleModalLabel");
        modaltitulo.innerText = titulo;

    let modalbody = document.getElementById("modalbody");
        modalbody.innerHTML = mensagem;

    $("#modal").modal({
        show: true
    });
}

let reiniciar = document.querySelector("#reiniciar")
reiniciar.addEventListener("click", function(){
    location.reload();
});
