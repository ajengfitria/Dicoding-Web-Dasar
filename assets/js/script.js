// Berubah background warna navbar saat di scroll
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("nav").css("background", "#F6AD06");
        } else {
            $("nav").css("background", "none");
        }
    });
});