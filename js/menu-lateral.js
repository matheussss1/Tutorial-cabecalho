    // var menu = $('.menu-lateral');

    // $('.abre-menu').click(function(){
    //     menu.is(':hidden')? menu.slideToggle('slow') : false;
    //     $('.overlay').removeAttr('hidden');
    // })
    // $('.fecha-menu').click(function(){
    //     !menu.is(':hidden')? menu.slideToggle('slow') : false;
    //     $('.overlay').attr('hidden', 'hidden');
    // })

    var menuLateral = document.querySelector('.menu-lateral')
    var abreMenu = document.querySelector('.abre-menu')
    var fechaMenu = document.querySelector('.fecha-menu')

    abreMenu.addEventListener('click', function(){
        menuLateral.classList.add('animacao-abre')
    })
    fechaMenu.addEventListener('click', function(){
        menuLateral.classList.remove('animacao-abre')
        menuLateral.classList.add('animacao-fecha')
    })