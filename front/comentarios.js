// Carrega o HTML
document.addEventListener('DOMContentLoaded', function () {
    const listaComentario = document.getElementById('comentariosLista'); //Encontra o elemento da página onde os comentários serão exibidos
    const pagina = window.location.pathname; //Verifica o caminho URL da página atual, garantindo para salvar e/ou enviar posts para o local certo

    // Carregar comentários armazenados
    const comentarioSalvo = JSON.parse(localStorage.getItem(pagina)) || []; //Converte comentários salvos no localStorage (formato string) para um Array, exibindo os post salvos na página quando for recarregada

    //Exibe os comentários salvos na página
    comentarioSalvo.forEach((post, index) => { 
        addComentarioNaPagina(post, index);
    });

    //Configura o evento de envio dos comentários
    document.getElementById('formsComentario').addEventListener('submit', function (e) { //Captura o efeito de enviar para processar os post dele
        e.preventDefault(); //Evita um comportamento padrão de erro, evita de executar uma ação padrão do navegador de recarregar a página
        const nome = document.getElementById('meuInput').value.trim(); //Obtém o valor do campo de nome e o value.trim remove espaços da string (deixa o texto limpo)
        const post = document.getElementById('comentarioUsuario').value.trim();
        if (nome && post) {

            // Criar novo comentário
            const newPost = { nome, text: post };
            addComentarioNaPagina(newPost, comentarioSalvo.length);

            // Adicionar comentário ao armazenamento
            comentarioSalvo.push(newPost);
            localStorage.setItem(pagina, JSON.stringify(comentarioSalvo));

            // Limpar campos
            document.getElementById('meuInput').value = '';
            document.getElementById('comentarioUsuario').value = '';
        }
    });
    function addComentarioNaPagina(post, index) {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
 <p><strong>${post.nome}:</strong> ${post.text}</p>
 <button class="delete-btn" data-index="${index}">Excluir</button>
        `;
        listaComentario.appendChild(postElement);
    }
    listaComentario.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');

            // Remover comentário da página e do armazenamento
            listaComentario.removeChild(e.target.parentElement);
            comentarioSalvo.splice(index, 1);
            localStorage.setItem(pagina, JSON.stringify(comentarioSalvo));
            
            // Atualizar índices dos comentários restantes
            Array.from(listaComentario.children).forEach((child, i) => {
                const button = child.querySelector('.delete-btn');
                button.setAttribute('data-index', i);
            });
        }
    });
});