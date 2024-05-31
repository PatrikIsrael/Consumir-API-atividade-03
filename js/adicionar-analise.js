$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const filmeId = urlParams.get('id');

    if (!filmeId) {
        alert('ID do filme não encontrado na URL.');
        return;
    }

    $('#salvaAnaliseButton').click(function(event) {
        event.preventDefault();

        let analise = {
            analise: $('#analise').val(),
            nota: parseInt($('#nota').val()) // Garantir que nota seja um inteiro
        };

        console.log('Dados a serem enviados:', analise); // Log dos dados

        $.ajax({
            url: `http://localhost:8080/filme/adicionar-analise/${filmeId}`,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(analise),
            success: function(data) {
                console.log('Resposta do servidor:', data);
                alert('Análise do filme adicionada com sucesso!');
                window.location.href = `detalhe-filme.html?id=${filmeId}`;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao adicionar análise:', textStatus, errorThrown);
                console.error('Resposta do servidor:', jqXHR.responseText);
                alert('Não foi possível adicionar a análise do filme.');
            }
        });
    });

    $('#voltarButton').click(function() {
        window.location.href = `detalhe-filme.html?id=${filmeId}`;
    });
});
