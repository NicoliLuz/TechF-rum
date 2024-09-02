// Carrega o HTML
document.addEventListener('DOMContentLoaded', function () {
    const listaComentario = document.getElementById('comentariosLista'); //Encontra o elemento da página onde os comentários serão exibidos
    const pagina = window.location.pathname; //Verifica o caminho URL da página atual, garantindo para salvar e/ou enviar posts para o local certo

    // Carregar comentários armazenados
    const comentarioSalvo = JSON.parse(localStorage.getItem(pagina)) || []; //Converte comentários salvos no localStorage (formato string) para um Array, exibindo os post salvos na página quando for recarregada

    // Exibe os comentários salvos na página
    comentarioSalvo.forEach((post, index) => { 
        addComentarioNaPagina(post, index);
    });

    // Configura o evento de envio dos comentários
    document.getElementById('formsComentario').addEventListener('submit', function (e) { //Captura o efeito de enviar para processar os post dele
        e.preventDefault(); //Evita um comportamento padrão de erro, evita de executar uma ação padrão do navegador de recarregar a página
        const nome = document.getElementById('meuInput').value.trim(); //Obtém o valor do campo de nome e o value.trim remove espaços da string (deixa o texto limpo)
        const post = document.getElementById('comentarioUsuario').value.trim(); //Obtém o valor do campo de comentário e o value.trim remove espaços extras (deixa o texto limpo)
        if (nome && post) { //Verifica se ambos os campos, nome e post, foram preenchidos

            // Criar novo comentário
            const novoPost = { nome, text: post }; //Cria um novo comentário, será usado para exibir e salvar o post
            addComentarioNaPagina(novoPost, comentarioSalvo.length); //Exibe o novo coentário na página

            // Adiciona novo post no Array e salva ele no localStorage (definido acima)
            comentarioSalvo.push(novoPost); 
            localStorage.setItem(pagina, JSON.stringify(comentarioSalvo)); 

            // Limpar campos do forms (nome e comentário) após o envio, deixando limpo e/ou vazio para novos posts
            document.getElementById('meuInput').value = ''; 
            document.getElementById('comentarioUsuario').value = '';
        }
    });
    function addComentarioNaPagina(post, index) {  //Define uma função que cria e envia novos comentários para a página
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
 <p><strong>${post.nome}:</strong> ${post.text}</p> 
 <button class="botaoExcluir" data-index="${index}">Excluir</button>
        `; //O strong destaca o nome do usuário no post com negrito - data-index armazena o índice (posição) no post no Array, ajuda na identificação do excluir
        listaComentario.appendChild(postElement);
    }
    listaComentario.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('botaoExcluir')) {
            const index = e.target.getAttribute('data-index');

            // Remover comentário da página e do armazenamento
            listaComentario.removeChild(e.target.parentElement);
            comentarioSalvo.splice(index, 1);
            localStorage.setItem(pagina, JSON.stringify(comentarioSalvo));
            
            // Atualizar índices dos comentários restantes
            Array.from(listaComentario.children).forEach((child, i) => {
                const button = child.querySelector('.botaoExcluir');
                button.setAttribute('data-index', i);
            });
        }
    });
});