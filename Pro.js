$(document).ready(function () {
    // Toggle mobile nav
    $(".toggle i").click(function () {
        $(".nav2 ul").slideToggle(300);
    });

    // Close menu on link click (mobile UX)
    $(".nav2 ul li a").click(function () {
        if ($(window).width() < 992) {
            $(".nav2 ul").slideUp(300);
        }
    });

    // Smooth scroll for anchor links
    $("a[href^='#']").click(function (e) {
        e.preventDefault();
        let target = $(this.hash);
        if (target.length) {
            $("html, body").animate(
                { scrollTop: target.offset().top - 70 },
                700
            );
        }
    });

    // Back to top button (optional)
    $("body").append('<button id="backToTop">↑</button>');
    $("#backToTop").css({
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "10px 15px",
        border: "none",
        "border-radius": "50%",
        background: "lightseagreen",
        color: "#fff",
        "font-size": "20px",
        cursor: "pointer",
        display: "none",
        "z-index": "999"
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });

    $("#backToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});