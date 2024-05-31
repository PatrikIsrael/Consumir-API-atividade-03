$(document).ready(function() {
    // Evento de submit do formulário de editar filme
    $('#formEditarFilme').submit(function(event) {
        event.preventDefault();

        // Obtém os dados do formulário
        let filme = {
            titulo: $('#titulo').val(),
            sinopse: $('#sinopse').val(),
            genero: $('#genero').val(),
            anoLancamento: $('#anoLancamento').val()
        };

        // Obtém o ID do filme da URL
        const urlParams = new URLSearchParams(window.location.search);
        const filmeId = urlParams.get('id');

        // Realiza a requisição AJAX para atualizar o filme
        $.ajax({
            url: `http://localhost:8080/filme/atualizar/${filmeId}`,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(filme),
            success: function(data) {
                alert('Filme atualizado com sucesso!');
                window.location.href = '/exibir-filmes.html';
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao atualizar filme:', textStatus, errorThrown);
                alert('Não foi possível atualizar o filme.');
            }
        });
    });
});
