$(document).ready(function () {
    location.hash && $(location.hash + '.collapse').collapse('show');
});

$('.block-item-menu .nav-item.nav-link').on('click', () => location.reload());

$('.panel-collapse').on('show.bs.collapse', function () {
    $('.panel.panel-default').find('.active').removeClass('active').siblings('.show').removeClass('show');
    $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
});