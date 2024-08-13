/*function lerMais () {
   var pontos = document.getElementById("pontos");
   var maisTexto = document.getElementById("mais");
   var lermais = document.getElementById("lermais");

   if (pontos.style.display === "none") {
      pontos.style.display = "inline";
      maisTexto.style.display = "none";
      lermais.innerHTML = "Ler Mais";
   } else {
      pontos.style.display = "none";
      maisTexto.style.display = "inline";
      lermais.innerHTML = "Ler Mais";
   }
}
*/

/*Selecionando as div pelo seu ID*/

const content = document.getElementById('content');
const lerMais = document.getElementById('ler-mais');

lerMais.addEventListener('click', () => { /*Criando um evento que é executado ao ser clicado*/
   // content.classList.toggle('expanded'); /*Alterna a presença do Expanded, se está presente é removida, se não é adicionada, muda o estilo*/
   lerMais.textContent = content.classList.contains('expanded') ? 'Ler menos' : 'Ler mais'; /*Altera o botão entre lerMais e lerMenos*/
});
