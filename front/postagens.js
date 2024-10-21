async function addComentario(data, formulario) {
    try {
        /*fetch é uma função usada para fazer requisições HTTP, está fazendo uma requisição para a URL 'http://localhost:3308/usuario/logar'*/
        /*await espera a resposta da requisição antes de continuar a execução do código*/
        const response = await fetch('http://localhost:3308/post/addComentarioRamificacao', {
            method: 'POST', /*Define o método HTTP da requisição como POST*/
            headers: {
                'Content-Type': 'application/json' /*informar ao servidor que o corpo da requisição está no formato JSON*/
            },
            body: JSON.stringify(data) /*Converte o objeto data em uma string JSON.*/
        });

        const responseData = await response.json(); /*response.json() converte a resposta da requisição em um objeto JavaScript.*/
        if (response.status == 201) {
            formulario.reset(); /*Limpa os campos do formulário*/
        } else {
            alert(responseData.message); /*xibe uma mensagem de erro se a resposta não for bem-sucedida*/
        }
    } catch (error) {
        console.error('Erro:', error); /*Captura e exibe erros que possam ocorrer durante a execução*/
    }
}

async function listarComentarios() {
    try {
        /*fetch é uma função usada para fazer requisições HTTP, está fazendo uma requisição para a URL 'http://localhost:3308/usuario/logar'*/
        /*await espera a resposta da requisição antes de continuar a execução do código*/
        const response = await fetch('http://localhost:3308/get/listarComentariosRamificacao', {
            method: 'GET', /*Define o método HTTP da requisição como POST*/
            headers: {
                'Content-Type': 'application/json' /*informar ao servidor que o corpo da requisição está no formato JSON*/
            }
        });
        return response;
    } catch (error) {
        console.error('Erro:', error); /*Captura e exibe erros que possam ocorrer durante a execução*/
    }
}

async function listarComentariosFormatado() {
    try {

        const listaComentario = document.getElementById('comentariosLista'); //Encontra o elemento da página onde os comentários serão exibidos
        while (listaComentario.firstChild) {
            listaComentario.removeChild(listaComentario.lastChild);
        }

        /*fetch é uma função usada para fazer requisições HTTP, está fazendo uma requisição para a URL 'http://localhost:3308/usuario/logar'*/
        /*await espera a resposta da requisição antes de continuar a execução do código*/
        const response = await listarComentarios();

        const responseData = await response.json(); /*response.json() converte a resposta da requisição em um objeto JavaScript.*/
        if (response.status != 200) {
            alert(responseData.message); /*xibe uma mensagem de erro se a resposta não for bem-sucedida*/
        }

        // Carregar comentários armazenados
        //const comentarioSalvo = JSON.parse(localStorage.getItem(pagina)) || []; //Converte comentários salvos no localStorage (formato string) para um Array, exibindo os post salvos na página quando for recarregada
        console.log('lista comentários');
        console.log(responseData);
        const comentarioSalvo = responseData.data || []; //Converte comentários salvos no localStorage (formato string) para um Array, exibindo os post salvos na página quando for recarregada

        // Exibe os comentários salvos na página
        comentarioSalvo.forEach((post, index) => {
            addComentarioNaPagina(post, index);
        });

        function addComentarioNaPagina(post, index) {  //Define uma função que cria e envia novos comentários para a página
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
            <p><strong>${post.nome}:</strong> ${post.textoPost}</p> 
            
                    `; //O strong destaca o nome do usuário no post com negrito - data-index armazena o índice (posição) no post no Array, ajuda na identificação do excluir
            listaComentario.appendChild(postElement);

            //<button class="botaoExcluir" data-index="${index}">Excluir</button>
        }
        listaComentario.addEventListener('click', function (e) {
            if (e.target && e.target.classList.contains('botaoExcluir')) {
                const index = e.target.getAttribute('data-index');

                // Remover comentário da página e do armazenamento
                listaComentario.removeChild(e.target.parentElement);
                comentarioSalvo.splice(index, 1);
                //localStorage.setItem(pagina, JSON.stringify(comentarioSalvo));

                // Atualizar índices dos comentários restantes
                Array.from(listaComentario.children).forEach((child, i) => {
                    const button = child.querySelector('.botaoExcluir');
                    button.setAttribute('data-index', i);
                });
            }
        });
    } catch (error) {
        console.error('Erro:', error); /*Captura e exibe erros que possam ocorrer durante a execução*/
    }
}