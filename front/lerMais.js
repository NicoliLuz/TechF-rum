function lerMais () {
   var spanConteudo = document.getElementById("hidden-conteudo");
   
   if (spanConteudo.style.display === "none") { /*Torna o elemento oculto*/
      spanConteudo.style.display = "block"; /*Torna o elemento visível e muda o texto do botão para "Reduzir"*/
      document.getElementById('btnLerMais').innerHTML = "Reduzir"; /*Atualiza o texto do botão com o ID btnLerMais para "Reduzir"*/
   } else {
      spanConteudo.style.display = "none";
      /*Se o elemento estiver visível, oculta-o e muda o texto do botão para "Ler mais"*/
      document.getElementById('btnLerMais').innerHTML = "Ler mais";
   }
}