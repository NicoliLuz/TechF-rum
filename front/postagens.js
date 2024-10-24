async function addComentario(data, formulario, pagina) {
    try {
        /*fetch é uma função usada para fazer requisições HTTP, está fazendo uma requisição para a URL 'http://localhost:3308/usuario/logar'*/
        /*await espera a resposta da requisição antes de continuar a execução do código*/
        var response = null;
        var url = '';
        if (pagina == 'RAMIFICACAO') {
            url = 'http://localhost:3308/post/addComentarioRamificacao';
        } else if (pagina == 'MEDIA') {
            url = 'http://localhost:3308/post/addComentarioMedia';
        }

        response = await fetch(url, {
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

async function listarComentariosFormatado(pagina) {
    try {

        const listaComentario = document.getElementById('comentariosLista'); //Encontra o elemento da página onde os comentários serão exibidos
        while (listaComentario.firstChild) {
            listaComentario.removeChild(listaComentario.lastChild);
        }

        /*fetch é uma função usada para fazer requisições HTTP, está fazendo uma requisição para a URL 'http://localhost:3308/usuario/logar'*/
        /*await espera a resposta da requisição antes de continuar a execução do código*/
        const response = await listarComentarios(pagina);

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
            <p>Postado em: ${post.datapost}<p>
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

async function listarComentarios(pagina) {
    try {
        /*fetch é uma função usada para fazer requisições HTTP, está fazendo uma requisição para a URL 'http://localhost:3308/usuario/logar'*/
        /*await espera a resposta da requisição antes de continuar a execução do código*/
        var response = null;
        var url = '';
        if (pagina == 'RAMIFICACAO') {
            url = 'http://localhost:3308/get/listarComentariosRamificacao';

        } else if (pagina == 'MEDIA') {
            url = 'http://localhost:3308/listarComentariosMedia';
        }
        
        response = await fetch(url, {
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