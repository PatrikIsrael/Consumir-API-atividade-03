$(document).ready(function() {
    // Obtém o ID do filme da URL
    const urlParams = new URLSearchParams(window.location.search);
    const filmeId = urlParams.get('id');

    // Carrega os detalhes do filme ao carregar a página
    carregarDetalhesFilme();

    // Evento de clique no botão "Deletar Filme"
    $('#btnDeletar').click(function() {
        if (confirm('Tem certeza que deseja deletar este filme?')) {
            deletarFilme(filmeId);
        }
    });

    // Evento de clique no botão "Atualizar"
    $('#btnAtualizar').click(function() {
        window.location.href = `atualizar-filme.html?id=${filmeId}`;
    });

    // Evento de clique no botão "Adicionar Análise"
    $('#btnAdicionarAnalise').click(function() {
        window.location.href = `adicionar-analise.html?id=${filmeId}`;
    });

    // Função para carregar os detalhes do filme
    function carregarDetalhesFilme() {
        $.ajax({
            url: `http://localhost:8080/filme/pesquisar/${filmeId}`,
            method: 'GET',
            success: function(filme) {
                // Preenche os campos do HTML com os detalhes do filme
                $('.filme-titulo').text(filme.titulo);
                $('.filme-genero').text(filme.genero);
                $('.filme-sinopse').text(filme.sinopse);
                $('.filme-ano-lancamento').text(filme.anoLancamento);
                $('.filme-analise').text(filme.analise || 'N/A'); // Se não houver análise, exibe 'N/A'
                $('.filme-nota').text(filme.nota || 'N/A'); // Se não houver nota, exibe 'N/A'
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao carregar detalhes do filme:', textStatus, errorThrown);
                alert('Não foi possível carregar os detalhes do filme.');
            }
        });
    }

    // Função para deletar um filme
    function deletarFilme(id) {
        $.ajax({
            url: `http://localhost:8080/filme/deletar/${id}`,
            method: 'DELETE',
            success: function(data) {
                alert('Filme deletado com sucesso!');
                window.location.href = 'exibir-filmes.html'; // Redireciona para a página de exibição de filmes
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao deletar filme:', textStatus, errorThrown);
                alert('Não foi possível deletar o filme.');
            }
        });
    }
});
