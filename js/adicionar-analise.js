$(document).ready(function() {
    // Evento de submit do formulário de adicionar análise
    $('#formAdicionarAnalise').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário
        
        // Obtém os dados do formulário
        let analise = $('#analise').val();
        let nota = $('#nota').val();
        let filmeId = $('#filmeId').val();

        // Verifica se a nota está dentro do intervalo válido (0-10)
        if (nota < 0 || nota > 10) {
            alert('A nota do filme deve estar entre 0 e 10.');
            return;
        }

        // Envia os dados da análise para o backend via AJAX
        $.ajax({
            url: `http://localhost:8080/filme/adicionar-analise?id=${filmeId}`,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ analise: analise, nota: nota }),
            success: function(data) {
                // Exibe uma mensagem de sucesso e redireciona para a página de detalhes do filme
                alert('Análise adicionada com sucesso!');
                window.location.href = `detalhe-filme.html?id=${filmeId}`;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Em caso de erro, exibe uma mensagem de erro
                console.error('Erro ao adicionar análise:', textStatus, errorThrown);
                alert('Não foi possível adicionar a análise.');
            }
        });
    });
});
