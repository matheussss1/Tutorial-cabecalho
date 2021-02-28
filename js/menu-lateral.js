    var menu = $('.menu-lateral');

    $('.abre-menu').click(function(){
        menu.is(':hidden')? menu.slideToggle('slow') : false;
        $('.overlay').removeAttr('hidden');
    })
    $('.fecha-menu').click(function(){
        !menu.is(':hidden')? menu.slideToggle('slow') : false;
        $('.overlay').attr('hidden', 'hidden');
    })