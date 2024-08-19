function lerMais () {
   var spanConteudo = document.getElementById("hidden-conteudo");
   
   if (spanConteudo.style.display === "none") {
      spanConteudo.style.display = "block";
      document.getElementById('btnLerMais').innerHTML = "Reduzir";
   } else {
      spanConteudo.style.display = "none";
      document.getElementById('btnLerMais').innerHTML = "Ler mais";
   }
}