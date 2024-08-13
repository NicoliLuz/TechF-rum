const content = document.getElementById('content');
const lerMais = document.getElementById('ler-mais');

lerMais.addEventListener('click', () => {
   content.classList.toggle('expanded');
   lerMais.textContent = content.classList.contains('expanded') ? 'Ler menos' : 'Ler mais';
});