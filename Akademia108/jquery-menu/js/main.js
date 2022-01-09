$(document).ready(function () {
    //show/hide main-menu
    $('.nav-hamburger').click(function () {
        $('.main-menu').toggleClass('active');
    });
    //Fade-out webpage after click
    $('.main-menu-item').click(function (e) {
        e.preventDefault();
        $('body').fadeOut(2000, function () {
            window.location.href = $(e.target).attr('href');
        });

    });


})