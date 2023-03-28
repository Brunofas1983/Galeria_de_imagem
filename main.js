$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })
        
    $('#cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoimagemnova = $('#endereco-imagem-nova').val();
        const novoiten = $('<li style="display: none;"></li>');
        $(`<img src="${enderecoimagemnova}"/>`).appendTo(novoiten);
        $(`
            <div class="overley-image-link">
                <a href="${enderecoimagemnova}" target="_blank" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoiten);
        $(novoiten).appendTo('ul');
        $(novoiten).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
    

})




