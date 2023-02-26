/* ---------- Sticky Header ------------ */
$(window).on("scroll", function() {
    $(window).scrollTop() >= 70 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
}), 

/* ---------- Navbar Collapse ------------ */
$(document).on("click", ".navbar-collapse.show", function(a) {
    $(a.target).is("a") && $(this).collapse("hide")
}), 

/* ---------- Navbar Scroll Down ------------ */
$(".navbar-nav a, .scroll_down a").on("click", function(a) {
    var o = $(this);
    $("html, body").stop().animate({
        scrollTop: $(o.attr("href")).offset().top - 0
    }, 1500, "easeInOutExpo"), a.preventDefault()
}), 

/* ---------- Navbar Collapse Offset ------------ */
$("#navbarCollapse").scrollspy({
    offset: 20
}), 

/* ---------- Data Elements ------------ */
$(".element").each(function() {
    var a = $(this);
    a.typed({
        strings: a.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}), 

/* ---------- Portfolio Filter Elements ------------ */
$(window).on("load", function() {
    var a = $(".work-filter"),
        o = $("#menu-filter");
    a.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    }), 
	o.find("a").on("click", function() {
        var e = $(this).attr("data-filter");
        return o.find("a").removeClass("active"), $(this).addClass("active"), a.isotope({
            filter: e,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
}), 

/* ---------- Magnificpop ------------ */
$(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
}), 

/* ---------- Owl Carousel ------------ */
$("#owl-demo").owlCarousel({
    autoPlay: 5000,
	stopOnHover: true,
	navigation: false,
	paginationSpeed: 1000,
	goToFirstSpeed: 2000,
	singleItem: true,
	autoHeight: true,
}), 

/* ---------- Body Status ------------ */
$("#status").fadeOut(), $("body").delay(350).css({
    overflow: "visible"
}), 

/* ---------- Back Top Arrow and Animate ------------ */
$(window).on("scroll", function() {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), 

$(".back_top").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
});

/* ---------- Preloader ------------ */
$(window).on('load', function() {
   $(".preloader").delay(400).fadeOut("slow");
});