$("#select-phone").selectpicker({
    showSubtext: true
});

$('#select-phone').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    window.location.href =  e.currentTarget[clickedIndex].value
});
