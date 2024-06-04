// theme-toggle.js

$(document).ready(function() {
    // Checa o tema salvo no localStorage
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
    }

    // Alterna o tema ao clicar no botão
    $('#themeToggleButton').click(function() {
        $('body').toggleClass('dark-mode');

        // Salva a preferência do tema no localStorage
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
