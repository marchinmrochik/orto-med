
$('.nav-item[data-toggle="tab"]').mouseenter(function (e) {
    $('#nav-tab_content').addClass('show_block');
    $(this).trigger('click', function (e) {})
});

$(document).mousemove(function (e){ // событие клика по веб-документу
    var div = $("#header"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('#nav-tab_content').removeClass('show_block'); // скрываем его
        $('.nav-item[data-toggle="tab"].active').removeClass('active').attr('aria-selected' , false);
    }
});
