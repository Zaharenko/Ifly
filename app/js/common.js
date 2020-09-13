$(document).ready(function () {

    /* Active slide menu */
    $("#burger-button").click(function () {
        $(".right-slide-menu").toggleClass("active-menu");
        $("body").toggleClass("no-scroll");
    });

    /* Add one and delete one number */
    $('.btn-group').on('click', 'span', function () {
        var inp = $('input' , this.parentNode),
            val = +inp.val()||0;
        inp.val(val += this.className == 'minus' ? val > 0 ? -1: 0: 1);
    });

    /* Delete element DOM  */
    $(".one-fly .one-fly__price-btn .btn-group .delete-line").click(function () {
        $(this).parent().parent().parent().remove();
    });

});
