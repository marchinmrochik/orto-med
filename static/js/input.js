$(document).on('click','.icon-eye', function () {
    $(this).prev('input[name="password"]').attr('type') === 'password' ? $(this).prev('input[name="password"]').attr('type', 'text') : $(this).prev('input[name="password"]').attr('type', 'password')
});