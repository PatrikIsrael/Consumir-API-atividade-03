$(document).ready(function() {
    $('#salvaAnaliseButton').click(function() {
        // Obtém os dados do formulário
        let analise = {
            id: $('#filmeId').val(),
            analise: $('#analise').val(),
            nota: $('#nota').val()
        };

        console.log('Dados da análise a serem enviados:', analise);

        // Envia os dados da análise para o backend via AJAX
        $.ajax({
            url: 'http://localhost:8080/adicionar-analise',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(analise), 
            success: function(data) {
                console.log('Resposta do servidor:', data);
                alert('Análise do filme adicionada com sucesso!');
                window.location.href = 'detalhe-filme.html?id=' + analise.id;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao adicionar análise:', jqXHR, textStatus, errorThrown);
                alert('Não foi possível adicionar a análise do filme.');
            }
        });
    });
});
