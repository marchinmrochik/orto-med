$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        wrapping: false,
        alwaysShowClose: true,
        showArrows: false
    });
});