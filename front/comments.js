document.addEventListener('DOMContentLoaded', function () {
    const commentsList = document.getElementById('comments-list');
    const page = window.location.pathname;
    // Carregar comentários armazenados
    const savedComments = JSON.parse(localStorage.getItem(page)) || [];
    savedComments.forEach((comment, index) => {
        addCommentToPage(comment, index);
    });
    document.getElementById('comment-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name-input').value.trim();
        const comment = document.getElementById('comment-input').value.trim();
        if (name && comment) {
            // Criar novo comentário
            const newComment = { name, text: comment };
            addCommentToPage(newComment, savedComments.length);
            // Adicionar comentário ao armazenamento
            savedComments.push(newComment);
            localStorage.setItem(page, JSON.stringify(savedComments));
            // Limpar campos
            document.getElementById('name-input').value = '';
            document.getElementById('comment-input').value = '';
        }
    });
    function addCommentToPage(comment, index) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
 <p><strong>${comment.name}:</strong> ${comment.text}</p>
 <button class="delete-btn" data-index="${index}">Excluir</button>
        `;
        commentsList.appendChild(commentElement);
    }
    commentsList.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            // Remover comentário da página e do armazenamento
            commentsList.removeChild(e.target.parentElement);
            savedComments.splice(index, 1);
            localStorage.setItem(page, JSON.stringify(savedComments));
            // Atualizar índices dos comentários restantes
            Array.from(commentsList.children).forEach((child, i) => {
                const button = child.querySelector('.delete-btn');
                button.setAttribute('data-index', i);
            });
        }
    });
});