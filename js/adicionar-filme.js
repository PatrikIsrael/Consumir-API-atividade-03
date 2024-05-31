$(document).ready(function() {
    // Evento de submit do formulário de adicionar filme
    $('#formAdicionarFilme').submit(function(event) {
        event.preventDefault(); 
        
        // Obtém os dados do formulário
        let filme = {
            titulo: $('#titulo').val(),
            sinopse: $('#sinopse').val(),
            genero: $('#genero').val(),
            anoLancamento: $('#anoLancamento').val()
        };

        // Envia os dados do filme para o backend via AJAX
        $.ajax({
            url: 'http://localhost:8080/filme/adicionar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(filme),
            success: function(data) {
                alert('Filme adicionado com sucesso!');
                $('#formAdicionarFilme')[0].reset();
            },
            error: function(jqXHR, textStatus, errorThrown) {

                console.error('Erro ao adicionar filme:', textStatus, errorThrown);
                alert('Não foi possível adicionar o filme');
            }
        });
    });
});
