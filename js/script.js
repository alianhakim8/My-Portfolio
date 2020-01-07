// navbar mobile
$(document).ready(function () {
    $('.sidenav').sidenav();

});

// akhir navbar mobile

// page-scroll ( pada saat link di klik)
$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1200, 'easeInOutExpo');
    e.preventDefault();


});