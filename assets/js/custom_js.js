"use strict"; // Start of use strict

// Functions definitions
//======================

function revSliderActivator() {
	// Main Revolution Slider Settings
    $("#main-slider").length && $("#main-slider").revolution({
        sliderType: "Auto Responsive",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: "#site-header",
        delay: 6000,
        gridwidth: 1230,
        gridheight: 700,
        navigation: {
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            arrows: {
                style: "",
                enable: true,
                hide_under: 768,
                hide_onleave: false,
                left: {
                    h_align: "left",
                    v_align: "center"
                },
                right: {
                    h_align: "right",
                    v_align: "center"
                }
            }
        }
    })
}

function formValidation() {
	// Single Post Form
    $("#comment-form").length && $("#comment-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Please type a e-mail address.",
                email: "This is not a valid email address."
            }
        }
    });

    // Contact Homepage Form
    $("#contact-form").length && $("#contact-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Please type a e-mail address.",
                email: "This is not a valid email address."
            }
        }
    });
}

function instagramGallery() {
	// Instagram Footer
    if ($("#footer-insta-dan").length) {
        var a = new Instafeed({
            get: "user",
            userId: "6117794641", // your user id here
            accessToken: "6117794641.d10794c.1ec5c07598be4fb490ad049fa2826806", // your acces token here
            sortBy: "most-liked",
            template: '<li class="bordered small-border hover-effect"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
            target: "footer-insta-dan",
            limit: 8,
            resolution: "low_resolution"
        });
        a.run()
    }
    	// Instagram Footer
    if ($("#footer-insta-bill").length) {
        var b = new Instafeed({
            get: "user",
            userId: "6113174139", // your user id here
            accessToken: "6113174139.a8a0549.4fdecc826a144602b0ecb0eceeb9a218", // your acces token here
            sortBy: "most-liked",
            template: '<li class="bordered small-border hover-effect"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
            target: "footer-insta-bill",
            limit: 8,
            resolution: "low_resolution"
        });
        b.run()
    }
    // Instagram Biography-Dan Page
    if ($("#biography-insta-dan").length) {
        var a = new Instafeed({
            get: "user",
            userId: "6117794641", // your user id here
            accessToken: "6117794641.d10794c.1ec5c07598be4fb490ad049fa2826806", // your acces token here
            sortBy: "most-liked",
            template: '<li class="bordered hover-effect"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
            target: "biography-insta-dan",
            limit: 8,
            resolution: "low_resolution"
        });
        a.run()
    }
        // Instagram Biography-Bill Page
    if ($("#biography-insta-bill").length) {
        var a = new Instafeed({
            get: "user",
            userId: "6113174139", // your user id here
            accessToken: "6113174139.a8a0549.4fdecc826a144602b0ecb0eceeb9a218", // your acces token here
            sortBy: "most-liked",
            template: '<li class="bordered hover-effect"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
            target: "biography-insta-bill",
            limit: 8,
            resolution: "low_resolution"
        });
        a.run()
    }
}

function twitterActivator() {
	// Twitter Footer Feed
    function b(a) {
        for (var b = a.length, c = 0, d = document.getElementById("twitter-feed"), e = "<ul>"; c < b;) e += '<li class="clearfix"><i class="fa fa-twitter"></i><div>' + a[c] + "<div></li>", c++;
        e += "</ul>", d.innerHTML = e
    }
    var a = {
        id: "1005214699003269120", // Your Twiiter ID
        domId: "twitter-feed",
        dateOnly: true,
        maxTweets: 2,
        enableLinks: true,
        showUser: false,
        showTime: true,
        showInteraction: false,
        customCallback: b
    };
    $("#twitter-feed").length && twitterFetcher.fetch(a)
}

function qtyButton() {
	// Single Product Quantity Button 
    $(".qtybutton").on("click", function() {
        var a = $(this),
            b = a.parent().find("input").val();
        if (a.hasClass("inc")) var c = parseFloat(b) + 1;
        else if (b > 0) var c = parseFloat(b) - 1;
        else c = 0;
        a.parent().find("input").val(c)
    })
}

function radioTimelineCarousel() {
	// Radio Timeline Carousel Settings
    $(".radio-shows-slider").each(function() {
        $(this).owlCarousel({
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                992: {
                    items: 3
                }
            },
            dots: false,
            nav: true,
            margin: 30
        })
    })
}

function nivoLightboxActivator() {
	// Nivo LightBox Activator
    $(".nivo-trigger").length && $(".nivo-trigger").nivoLightbox({
        theme: "default",
        effect: "fadeScale"
    })
}

function customPlayerFunctionality() {
	// Play/Pause Button bottom right
    var a = $("#pause-player"),
        b = $("#jp_container_1"),
        c = $("#jquery_jplayer_1");
    b.length && (a.addClass("player_exists"), a.on("click", function() {
        var a = $(this).data("clicked");
        b.hasClass("jp-state-playing") ? (c.jPlayer("pause"), $(this).removeClass("is_playing")) : (c.jPlayer("play"), $(this).addClass("is_playing")), $(this).data("clicked", !a)
    }), $("#jp_container_1 .jp-next, #jp_container_1 .jp-previous").on("click", function() {
        a.addClass("is_playing")
    }), $("#jp_container_1 .jp-play").on("click", function() {
        a.toggleClass("is_playing")
    }));
    // Playlist Toggle 
    $("#playlist-toggle").on("click", function() {
        $(this).parent().parent().parent().find("#main-player-playlist").addClass("toggled")
    }), $("#close-playlist").on("click", function() {
        $(this).parent().parent().parent().removeClass("toggled")
    })
}

function navbarButtons() {
	// Navigation Bar Buttons
    var a = $("#mini-cart-widget"),
        b = $("#mini-cart-toggle"),
        c = $("#search-toggle"),
        d = $("#menu-toggle");
    b.on("click", function() {
        $(this).toggleClass("toggled"), c.add(d).removeClass("toggled"), a.toggleClass("open"), $("#site-navigation, #search-header").removeClass("open")
    }), c.on("click", function() {
        $(this).toggleClass("toggled"), b.add(d).removeClass("toggled"), $("#search-header").toggleClass("open"), $("#site-navigation").add(a).removeClass("open")
    }), d.on("click", function() {
        $(this).toggleClass("toggled"), b.add(c).removeClass("toggled"), $("#site-navigation").toggleClass("open"), $("#search-header").add(a).removeClass("open")
    })
}

function masonryActivator() {
	// Masonry Activator
    var a = $(".masonry_wrapper");
    a.length && a.imagesLoaded(function() {
        a.masonry({
            columnWidth: 0,
            gutter: 0,
            percentPosition: true,
            originTop: true
        })
    })
}

function filterIsotope() {
	// Isotope Activator
    var a = $(".filterable-content");
    a.length && a.isotope(), $("#filter").length && $("#filter").on("click", "li", function() {
        $("li.selected").removeClass("selected"), $(this).addClass("selected");
        var a = $(this).attr("data-filter");
        $(".filterable-content").isotope({
            filter: a
        })
    })
}

function showBackToTop() {
	// Show BackToTop and Player buttons on bottom right
    $(window).scrollTop() > 450 ? ($("#site-header").addClass("scrolling"), $("#back-to-top, #pause-player.player_exists").css({
        bottom: "-1px"
    })) : ($("#site-header").removeClass("scrolling"), $("#back-to-top, #pause-player.player_exists").css({
        bottom: "-40px"
    }))
}

function clickBackToTop() {
	// BackToTop Animation
    $("#back-to-top").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"), false
    })
}

// Functions to run while Document Ready event
jQuery(document).on("ready", function() {
    ! function(a) {
        revSliderActivator(),
        formValidation(),
        instagramGallery(), 
        twitterActivator(), 
        qtyButton(),
        radioTimelineCarousel(), 
        nivoLightboxActivator(),
        customPlayerFunctionality(),
        navbarButtons(), 
        masonryActivator(), 
        clickBackToTop() 
    }(jQuery)
});

// Functions to run while Document Load event
jQuery(window).on("load", function() {
    ! function(a) {
        filterIsotope()
    }(jQuery)
}); 

// Functions to run while Document Resize event
jQuery(window).on("resize", function() {
    ! function(a) {
        setTimeout(function() {
            filterIsotope()
        }, 1000)
    }(jQuery)
}); 

// Functions to run while Window Scroll event
jQuery(window).on("scroll", function() {
    ! function(a) {
        showBackToTop()
    }(jQuery)
});