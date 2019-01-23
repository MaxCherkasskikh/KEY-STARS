//------------------- MAIN HOME PAGE ------------------>

$( "#menuButton" ).click(function() {

    $( "#menuButton" ).toggleClass( "closed open" );

    $( "#menuLink1" ).toggleClass( "closed open" );

    $( "#menuLink2" ).toggleClass( "closed open" );

    $( "#menuLink3" ).toggleClass( "closed open" );

    $( "#menuLink4" ).toggleClass( "closed open" );

    $( "#menuLink5" ).toggleClass( "closed open" );

    $( "#menuLink6" ).toggleClass( "closed open" );

    $( "#menuLink7" ).toggleClass( "closed open" );
    
    $( "#blurBackdrop" ).toggleClass( "closed open" );
    
    $( "#menuLinkContainer" ).toggleClass( "closed open" );

    $( "#menuLogoContainer" ).toggleClass( "open closed" );

    $( "#headerSignatureLogo" ).toggleClass( "open closed" );

    $( "#secondaryHeadingBackdrop" ).toggleClass( "open closed" );

    $( "#fanSignUpContainer" ).toggleClass( "open closed" );

    $( "#fanLogInContainer" ).toggleClass( "open closed" );

    $( "#celebrityLogInContainer" ).toggleClass( "open closed" );

    $( "#searchContainer" ).toggleClass( "open closed" );

    $( "#trendingContainer" ).toggleClass( "open closed" );

    $( "#aboutUsContainer" ).toggleClass( "open closed" );

    $( "#contactUsContainer" ).toggleClass( "open closed" );

})

//----------------------- THE END ---------------------->




































//------------------- ANIMATE CSS LOADING FUNCTION ------------------>

$(document).ready(function() {
    
    // Check if element is scrolled into view
    
    function isScrolledIntoView(elem) {
      
        var docViewTop = $(window).scrollTop();
      
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
      
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      
    }
    
    // If element is scrolled into view, fade it in
    
    $(window).scroll(function() {
      
        $('.scroll-animations .animated').each(function() {
        
            if (isScrolledIntoView(this) === true) {
          
                $(this).addClass('fadeInDown');
          
            }
        
        });
      
    });
    
});

//------------------- MENU OPEN/CLOSE FUNCTION ------------------>

var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.3, {
    
    y: 6,
    
    rotation: 45,
    
    ease: Expo.easeInOut
    
});

t1.to(".two", 0.3, {
    
    y: -6,
    
    rotation: -45,
    
    ease: Expo.easeInOut,
    
    delay: -0.3
    
});

t1.to(".menu", 2, {
    
    top: "0%",
    
    ease: Expo.easeInOut,
    
    delay: 0
    
});

t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();

$(document).on("click", ".toggle-btn", function() {
    
    t1.reversed(!t1.reversed());
    
});

$(document).on("click", "a", function() {
    
    t1.reversed(!t1.reversed());
    
});

//----------------- FAN LOG IN TO PAYMENT NAV ---------------->

function toPayment() {
    
    document.getElementById("fansignupformdiv").style.transform = "scale(0)";
    
        document.getElementById("fansignupformdiv").style.transformOrigin = "center";
    
            document.getElementById("fansignupformdiv").style.transition = "2s";
    
                document.getElementById("fansignupformdiv").style.transitionDelay = "0.3s";
    
    document.getElementById("paymentcontainer").style.transform = "scale(1)";
    
        document.getElementById("paymentcontainer").style.transformOrigin = "center";
    
            document.getElementById("paymentcontainer").style.transition = "3s";
    
                document.getElementById("paymentcontainer").style.transitionDelay = "1.5s";
    
}

//------------------ CHOOSE CARD ----------------->

$(document).ready(function() {
    
    $("#visaimage").click(function() {
        
        $("#cardselectorborder").addClass("visa").removeClass("mastercard amex");
        
    });
    
    $("#mastercardimage").click(function() {
        
        $("#cardselectorborder").addClass("mastercard").removeClass("visa amex");
        
    });
    
    $("#ameximage").click(function() {
        
        $("#cardselectorborder").addClass("amex").removeClass("visa mastercard");
        
    });
    
});

//------------------- THE END ------------------>