$('from input[type="file"]').chance(event => {
    let arquivo = event.target.files;
    if (arquivo.length === 0) {
        console.log('Sem imagem pra mostrar')
    } else {
        if (arquivo[0].type == 'imagem/jpeg') {
            $('img').remove();
            let imagem = $('<img class"img-responsive">');
            imagem.attr('src', window.URL.createObjectURL(arquivo[0]));
            $('figure').prepend(imagem);
        } else {
            alert('Formato não suportado')
        }
    }
});