$(document).ready(function () {
    $('img').on('click', function () {
        $('img').removeClass('selected');
        $(this).addClass('selected');
    });
});
