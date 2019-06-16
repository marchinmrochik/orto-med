$('.nav-item[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('#nav-tab_content').addClass('show_block');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("#header"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('#nav-tab_content').removeClass('show_block'); // скрываем его
        $('.nav-item[data-toggle="tab"]').hasClass('active').removeClass('show_block').setAttribute('aria-checked', 'false');
    }
});
