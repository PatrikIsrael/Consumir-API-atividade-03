$(document).ready(function() {
    // Função para carregar os filmes na tabela
    function carregarFilmes() {
        $.ajax({
            url: 'http://localhost:8080/filme/listar',
            method: 'GET',
            success: function(data) {
                $('#tabelaFilmes').empty();

                data.forEach(filme => {
                    let row = $('<tr>').append(
                        $('<td>').text(filme.id),
                        $('<td>').text(filme.titulo),
                        $('<td>').text(filme.sinopse),
                        $('<td>').text(filme.genero),
                        $('<td>').text(filme.anoLancamento),
                        $('<td>').append(
                            $('<a>').addClass('btn btn-info mr-2').text('Detalhes').attr('href', `detalhe-filme.html?id=${filme.id}`)
                        )
                    );
                    $('#tabelaFilmes').append(row);
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao carregar filmes:', textStatus, errorThrown);
                alert('Não foi possível carregar os filmes da API.');
            }
        });
    }

    // Evento de clique do botão "Buscar"
    $('#btnBuscar').click(function() {
        var titulo = $('#buscarFilme').val().trim();
        if (!titulo) {
            carregarFilmes();
            return;
        }

        $.ajax({
            url: `http://localhost:8080/filme/pesquisar-titulo/${titulo}`,
            method: 'GET',
            success: function(data) {
                $('#tabelaFilmes').empty();
                data.forEach(filme => {
                    let row = $('<tr>').append(
                        $('<td>').text(filme.id),
                        $('<td>').text(filme.titulo),
                        $('<td>').text(filme.sinopse),
                        $('<td>').text(filme.genero),
                        $('<td>').text(filme.anoLancamento),
                        $('<td>').append(
                            $('<a>').addClass('btn btn-info mr-2').text('Detalhes').attr('href', `detalhe-filme.html?id=${filme.id}`)
                        )
                    );
                    $('#tabelaFilmes').append(row);
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao buscar filmes por título:', textStatus, errorThrown);
                alert('Não foi possível buscar os filmes por título.');
            }
        });
    });

    // Carregar os filmes ao carregar a página
    carregarFilmes();
});
