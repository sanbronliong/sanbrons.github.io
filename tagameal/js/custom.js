$(window).scroll(function () {
    if ($("body[data-page='landing'] nav.navbar").hasClass("navbar-dynamic")) {
        if ($(window).scrollTop() > 10) {
            $("nav.navbar").addClass("navbar-small");
            if ($(window).width() >= 768) {
                $(".navbar-brand img").attr("src", "img/newlogo.png");
            }

        } else {
            $("nav.navbar").removeClass("navbar-small");
            if ($(window).width() >= 768) {
                $(".navbar-brand img").attr("src", "img/newlogo_inv.png");
            }

        }
    }

});

new WOW().init();

$(".navbar").on("show.bs.collapse", function (event) {
    $(this).addClass("navbar-open");
    $(".bar-1").addClass("bar-1-effect");
    $(".bar-2").addClass("bar-2-effect");
    $(".bar-3").addClass("bar-3-effect");
});

$(".navbar").on("hide.bs.collapse", function (event) {
    $(this).removeClass("navbar-open");
    $(".bar-1").removeClass("bar-1-effect");
    $(".bar-2").removeClass("bar-2-effect");
    $(".bar-3").removeClass("bar-3-effect");
});

/*VIDEO MODAL*/
$(document).ready(function () {
    if ($(window).width() < 768) {
        $(".navbar-brand img").attr("src", "img/newlogo.png");
    }
    $(function () {
        $(".video").click(function () {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-video"),
                videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.close').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    });

    //voucher click/update
    $('.voucher').click(function() {
        if ($(this).hasClass('active')) {
            console.log("active");
        } else {
            $('.voucherParent').find(".voucher.active").removeClass("active");
            $(this).addClass("active");
        }
    });
});

/* STICKY MENU & CART */
$(document).scroll(function () {
    fixedCol();

});

$(window).resize(function() {
    fixedCol();
});

function fixedCol() {
        var scrollPos = $(document).scrollTop();
    var width = $(".foodcategory").outerWidth() - 20;
    var width2 = $(".yourorders").outerWidth() - 30;

    if ($("body").data('page') == 'menu') {
        
        if ($(window).width() >= 991) {
            if (scrollPos >= 200) {
                $(".foodcategory").addClass("foodcategory-fixed");
                $(".foodcategory-fixed ul").css({
                    'width': width
                });

                $(".yourorders").addClass("yourorders-fixed");
                $(".yourorders-fixed .yourorders-container").css({
                    'width': width2
                });
            } else {
                $(".foodcategory").removeClass("foodcategory-fixed");
                $(".foodcategory ul").css({
                    'width': 'initial'
                });
                $(".yourorders").removeClass("yourorders-fixed");
                $(".yourorders .yourorders-container").css({
                    'width': 'initial'
                });
            }
        } else if ($(window).width() < 991) {
                $(".foodcategory").removeClass("foodcategory-fixed");
                $(".foodcategory ul").css({
                    'width': 'initial'
                });
                $(".yourorders").removeClass("yourorders-fixed");
                $(".yourorders .yourorders-container").css({
                    'width': 'initial'
                });
        }

    }
}

/* set cart amount in badge */
/* use this function to spawn badge
exp: setCartBadge(3)
*/
function setCartBadge(number, badgeClass = "cartBadge") {
    var badge = $("button.navbar-toggle");
    if (!badge.find("." + badgeClass).length) { // spawn cart badge
        showBadge(badge, number, badgeClass);
    } else if (badge.find("." + badgeClass).length) { // update badge number
        hideBadge(badge);
        showBadge(badge, number, badgeClass);
    }
}

function showBadge(badge, number, badgeClass) {
    badge.append("<span class='"+ badgeClass +"'>" + number + "</span>");
}

/* use this function to remove badge
removeBadge()
*/
function hideBadge(badge = $("button.navbar-toggle"), badgeClass = "cartBadge") {
    if (badge.find("." + badgeClass).length) {
        $("." + badgeClass).remove();
    }
    
}