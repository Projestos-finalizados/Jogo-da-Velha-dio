let jogador, vencedor =  null;
let jogadorSelecionado = document.getElementById('jogadorSelecionado');
let vencedorSelecionado = document.getElementById('vencedorSelecionado');
 let quadrado  = document.getElementsByClassName('quadrado');
trocaJogador("X");

function escolherQuadrado(id){

let quadrado = document.getElementById(id);
if ( quadrado.innerHTML != '-'){
    return
}

quadrado.innerHTML = jogador;
quadrado.style.color = 'black';

    if (jogador === "X"){
        jogador = "O";
    }
    else{

        jogador = "X"   
    }
    trocaJogador(jogador)
    checavencedor();
}
function trocaJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}
 function checavencedor(){
     let Quadrado1 = document.getElementById('1')
     let Quadrado2 = document.getElementById('2')
     let Quadrado3 = document.getElementById('3')
     let Quadrado4 = document.getElementById('4')
     let Quadrado5 = document.getElementById('5')
     let Quadrado6 = document.getElementById('6')
     let Quadrado7 = document.getElementById('7')
     let Quadrado8 = document.getElementById('8')
     let Quadrado9 = document.getElementById('9')

     if( checasequencia( Quadrado1, Quadrado2, Quadrado3)){
         mudaCorQuadrado( Quadrado1, Quadrado2, Quadrado3);
         vencedor(Quadrado1);
         return
     }
     if( checasequencia( Quadrado4, Quadrado5, Quadrado6)){
         mudaCorQuadrado( Quadrado4, Quadrado5, Quadrado6);
         vencedorSelecionado(Quadrado4);
         return
     }
     if( checasequencia( Quadrado7, Quadrado8, Quadrado9)){
         mudaCorQuadrado( Quadrado7, Quadrado8, Quadrado9);
         vencedorSelecionado(Quadrado7);
         return

     }
     if( checasequencia( Quadrado1, Quadrado4, Quadrado7)){
         mudaCorQuadrado( Quadrado1, Quadrado4, Quadrado7);
         vencedorS(Quadrado7);
     }
     if( checasequencia( Quadrado2, Quadrado5, Quadrado8)){
         mudaCorQuadrado( Quadrado2, Quadrado5, Quadrado8);
         vencedorSelecionado(Quadrado2);
         return

     }
     if( checasequencia( Quadrado3, Quadrado6, Quadrado9)){
         mudaCorQuadrado( Quadrado3, Quadrado6, Quadrado9);
         vencedorSelecionado(Quadrado3);
         return

     }
     if( checasequencia( Quadrado1, Quadrado5, Quadrado9)){
         mudaCorQuadrado( Quadrado1, Quadrado5, Quadrado9);
         vencedorSelecionado(Quadrado1);
         return

     }
     if( checasequencia( Quadrado3, Quadrado5, Quadrado7)){
         mudaCorQuadrado( Quadrado3, Quadrado5, Quadrado7);
         vencedorSelecionado(Quadrado1);
         return

     }
     function mudarVencedor(quadrado){
         vencedor.innerHTML = quadrado;
        vencedorSelecionado.innerHTML = vencedor

     }

      function mudaCorQuadrado( Quadrado1, Quadrado2, Quadrado3){
        Quadrado1.style.color = 'green';
        Quadrado2.style.color = 'green';
        Quadrado3.style.color = 'green';
      }
 }
  function checasequencia( Quadrado1, Quadrado2, Quadrado3){
      let igual = false;
      if( Quadrado1 != '-' && Quadrado1.innerHTML === Quadrado2.innerHTML && Quadrado2.innerHTML === Quadrado3.innerHTML){
          igual = true
      }
       return igual;
  }