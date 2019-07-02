$("#select-phone").selectpicker({
    showSubtext: true
});

$('#select-phone').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    window.location.href =  e.currentTarget[clickedIndex].value
});

$('#select-modification').selectpicker({});

$('#select-quantity').selectpicker({});


$('#select-delivery').selectpicker({});

$('#select-delivery').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    clickedIndex == 0 ? ($('.block-delivery-courier').removeClass('d-none'), $('.block-delivery-department').addClass('d-none')) : ($('.block-delivery-department').removeClass('d-none'), $('.block-delivery-courier').addClass('d-none'))
});
