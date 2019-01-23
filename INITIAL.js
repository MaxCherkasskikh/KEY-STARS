//------------------- ANIMATE CSS LOADING FUNCTION ------------------>

/*

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

//------------------- FAN LOG IN BOX OPEN ------------------>

function fanLogInOpen() {
    
    //----------- DIAMONDS ROTATING BACK ---------->
    
    document.getElementById("diamond1").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond1").style.transformOrigin = "left";
    
            document.getElementById("diamond1").style.transition = "2s";
    
                document.getElementById("diamond1").style.transitionDelay = "1.2s";
        
    document.getElementById("diamond2").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond2").style.transformOrigin = "left";
    
            document.getElementById("diamond2").style.transition = "2s";
    
                document.getElementById("diamond2").style.transitionDelay = "0.6s";
        
    document.getElementById("diamond3").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond3").style.transformOrigin = "right";
    
            document.getElementById("diamond3").style.transition = "2s";
    
                document.getElementById("diamond3").style.transitionDelay = "0.6s";
        
    document.getElementById("diamond4").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond4").style.transformOrigin = "right";
    
            document.getElementById("diamond4").style.transition = "2s";
    
                document.getElementById("diamond4").style.transitionDelay = "1.2s";
        
    document.getElementById("diamond5").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond5").style.transformOrigin = "left";
    
            document.getElementById("diamond5").style.transition = "2s";
    
                document.getElementById("diamond5").style.transitionDelay = "1.5s";
        
    document.getElementById("diamond6").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond6").style.transformOrigin = "left";
    
            document.getElementById("diamond6").style.transition = "2s";
    
                document.getElementById("diamond6").style.transitionDelay = "0.9s";
        
    document.getElementById("diamond7").style.transform = "rotateX(-90deg)";
    
        document.getElementById("diamond7").style.transformOrigin = "center";
    
            document.getElementById("diamond7").style.transition = "2s";
    
                document.getElementById("diamond7").style.transitionDelay = "0.3s";
        
    document.getElementById("diamond8").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond8").style.transformOrigin = "right";
    
            document.getElementById("diamond8").style.transition = "2s";
    
                document.getElementById("diamond8").style.transitionDelay = "0.9s";
        
    document.getElementById("diamond9").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond9").style.transformOrigin = "right";
    
            document.getElementById("diamond9").style.transition = "2s";
    
                document.getElementById("diamond9").style.transitionDelay = "1.5s";
    
    document.getElementById("diamond10").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond10").style.transformOrigin = "left";
    
            document.getElementById("diamond10").style.transition = "2s";
    
                document.getElementById("diamond10").style.transitionDelay = "1.2s";
    
    document.getElementById("diamond11").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond11").style.transformOrigin = "left";
    
            document.getElementById("diamond11").style.transition = "2s";
    
                document.getElementById("diamond11").style.transitionDelay = "0.6s";
    
    document.getElementById("diamond12").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond12").style.transformOrigin = "right";
    
            document.getElementById("diamond12").style.transition = "2s";
    
                document.getElementById("diamond12").style.transitionDelay = "0.6s";
    
    document.getElementById("diamond13").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond13").style.transformOrigin = "right";
    
            document.getElementById("diamond13").style.transition = "2s";
    
                document.getElementById("diamond13").style.transitionDelay = "1.2s";
    
    //------------------- BUTTONS ------------------>
    
    document.getElementById("fanbutton").style.transform = "rotateY(90deg)";
    
        document.getElementById("fanbutton").style.transformOrigin = "left";
    
            document.getElementById("fanbutton").style.transition = "2s";
    
                document.getElementById("fanbutton").style.transitionDelay = "0.6s";
    
    document.getElementById("celebritybutton").style.transform = "rotateY(-90deg)";
    
        document.getElementById("celebritybutton").style.transformOrigin = "right";
    
            document.getElementById("celebritybutton").style.transition = "2s";
    
                document.getElementById("celebritybutton").style.transitionDelay = "0.6s";
    
    document.getElementById("celebritysearchbutton").style.transform = "rotateX(-90deg)";
    
        document.getElementById("celebritysearchbutton").style.transformOrigin = "center";
    
            document.getElementById("celebritysearchbutton").style.transition = "2s";
    
                document.getElementById("celebritysearchbutton").style.transitionDelay = "0.6s";
    
    //------------------- HEADINGS ------------------>
    
    document.getElementById("headersecondaryheading").style.transform = "rotateX(90deg)";
    
        document.getElementById("headersecondaryheading").style.transformOrigin = "center";
    
            document.getElementById("headersecondaryheading").style.transition = "2s";
    
                document.getElementById("headersecondaryheading").style.transitionDelay = "0.6s";
    
    document.getElementById("secondaryheadingbackdrop").style.transform = "rotateX(90deg)";
    
        document.getElementById("secondaryheadingbackdrop").style.transformOrigin = "center";
    
            document.getElementById("secondaryheadingbackdrop").style.transition = "2s";
    
                document.getElementById("secondaryheadingbackdrop").style.transitionDelay = "0.6s";
    
    //------------------- LINES ------------------>
    
    document.getElementById("line5").style.transform = "rotateY(90deg)";
    
        document.getElementById("line5").style.transformOrigin = "left";
    
            document.getElementById("line5").style.transition = "2s";
    
                document.getElementById("line5").style.transitionDelay = "2s";
    
    document.getElementById("line6").style.transform = "rotateY(90deg)";
    
        document.getElementById("line6").style.transformOrigin = "right";
    
            document.getElementById("line6").style.transition = "2s";
    
                document.getElementById("line6").style.transitionDelay = "2s";
    
}

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

//------------------ CONFIRM PAYMENT ----------------->

function confirmPayment() {
    
    //----------- DIAMONDS ROTATING BACK ---------->
    
    document.getElementById("diamond1").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond1").style.transformOrigin = "left";
    
            document.getElementById("diamond1").style.transition = "2s";
    
                document.getElementById("diamond1").style.transitionDelay = "2.3s";
        
    document.getElementById("diamond2").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond2").style.transformOrigin = "left";
    
            document.getElementById("diamond2").style.transition = "2s";
    
                document.getElementById("diamond2").style.transitionDelay = "2.9s";
        
    document.getElementById("diamond3").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond3").style.transformOrigin = "right";
    
            document.getElementById("diamond3").style.transition = "2s";
    
                document.getElementById("diamond3").style.transitionDelay = "2.9s";
        
    document.getElementById("diamond4").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond4").style.transformOrigin = "right";
    
            document.getElementById("diamond4").style.transition = "2s";
    
                document.getElementById("diamond4").style.transitionDelay = "2.3s";
        
    document.getElementById("diamond5").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond5").style.transformOrigin = "left";
    
            document.getElementById("diamond5").style.transition = "2s";
    
                document.getElementById("diamond5").style.transitionDelay = "2s";
        
    document.getElementById("diamond6").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond6").style.transformOrigin = "left";
    
            document.getElementById("diamond6").style.transition = "2s";
    
                document.getElementById("diamond6").style.transitionDelay = "2.6s";
        
    document.getElementById("diamond7").style.transform = "rotateX(0deg)";
    
        document.getElementById("diamond7").style.transformOrigin = "center";
    
            document.getElementById("diamond7").style.transition = "2s";
    
                document.getElementById("diamond7").style.transitionDelay = "3.2s";
        
    document.getElementById("diamond8").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond8").style.transformOrigin = "right";
    
            document.getElementById("diamond8").style.transition = "2s";
    
                document.getElementById("diamond8").style.transitionDelay = "2.6s";
        
    document.getElementById("diamond9").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond9").style.transformOrigin = "right";
    
            document.getElementById("diamond9").style.transition = "2s";
    
                document.getElementById("diamond9").style.transitionDelay = "2s";
    
    document.getElementById("diamond10").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond10").style.transformOrigin = "left";
    
            document.getElementById("diamond10").style.transition = "2s";
    
                document.getElementById("diamond10").style.transitionDelay = "2.3s";
    
    document.getElementById("diamond11").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond11").style.transformOrigin = "left";
    
            document.getElementById("diamond11").style.transition = "2s";
    
                document.getElementById("diamond11").style.transitionDelay = "2.9s";
    
    document.getElementById("diamond12").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond12").style.transformOrigin = "right";
    
            document.getElementById("diamond12").style.transition = "2s";
    
                document.getElementById("diamond12").style.transitionDelay = "2.9s";
    
    document.getElementById("diamond13").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond13").style.transformOrigin = "right";
    
            document.getElementById("diamond13").style.transition = "2s";
    
                document.getElementById("diamond13").style.transitionDelay = "2.3s";
    
    //------------------- BUTTONS ------------------>
    
    document.getElementById("fanbutton").style.transform = "rotateY(0deg)";
    
        document.getElementById("fanbutton").style.transformOrigin = "left";
    
            document.getElementById("fanbutton").style.transition = "2s";
    
                document.getElementById("fanbutton").style.transitionDelay = "2s";
    
    document.getElementById("celebritybutton").style.transform = "rotateY(0deg)";
    
        document.getElementById("celebritybutton").style.transformOrigin = "right";
    
            document.getElementById("celebritybutton").style.transition = "2s";
    
                document.getElementById("celebritybutton").style.transitionDelay = "2s";
    
    document.getElementById("celebritysearchbutton").style.transform = "rotateX(0deg)";
    
        document.getElementById("celebritysearchbutton").style.transformOrigin = "center";
    
            document.getElementById("celebritysearchbutton").style.transition = "2s";
    
                document.getElementById("celebritysearchbutton").style.transitionDelay = "2s";
    
    //------------------- HEADINGS ------------------>
    
    document.getElementById("headersecondaryheading").style.transform = "rotateX(0deg)";
    
        document.getElementById("headersecondaryheading").style.transformOrigin = "center";
    
            document.getElementById("headersecondaryheading").style.transition = "2s";
    
                document.getElementById("headersecondaryheading").style.transitionDelay = "2s";
    
    document.getElementById("secondaryheadingbackdrop").style.transform = "rotateX(0deg)";
    
        document.getElementById("secondaryheadingbackdrop").style.transformOrigin = "center";
    
            document.getElementById("secondaryheadingbackdrop").style.transition = "2s";
    
                document.getElementById("secondaryheadingbackdrop").style.transitionDelay = "2s";
    
    //------------------- LINES ------------------>
    
    document.getElementById("line5").style.transform = "rotateY(0deg)";
    
        document.getElementById("line5").style.transformOrigin = "left";
    
            document.getElementById("line5").style.transition = "2s";
    
                document.getElementById("line5").style.transitionDelay = "0.2s";
    
    document.getElementById("line6").style.transform = "rotateY(0deg)";
    
        document.getElementById("line6").style.transformOrigin = "right";
    
            document.getElementById("line6").style.transition = "2s";
    
                document.getElementById("line6").style.transitionDelay = "0.2s";
    
}

//------------------- FAN LOG IN BOX CLOSE ------------------>

function fanLogInClose() {
    
    //----------- DIAMONDS ROTATING BACK ---------->
    
    document.getElementById("diamond1").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond1").style.transformOrigin = "left";
    
            document.getElementById("diamond1").style.transition = "2s";
    
                document.getElementById("diamond1").style.transitionDelay = "2.3s";
        
    document.getElementById("diamond2").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond2").style.transformOrigin = "left";
    
            document.getElementById("diamond2").style.transition = "2s";
    
                document.getElementById("diamond2").style.transitionDelay = "2.9s";
        
    document.getElementById("diamond3").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond3").style.transformOrigin = "right";
    
            document.getElementById("diamond3").style.transition = "2s";
    
                document.getElementById("diamond3").style.transitionDelay = "2.9s";
        
    document.getElementById("diamond4").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond4").style.transformOrigin = "right";
    
            document.getElementById("diamond4").style.transition = "2s";
    
                document.getElementById("diamond4").style.transitionDelay = "2.3s";
        
    document.getElementById("diamond5").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond5").style.transformOrigin = "left";
    
            document.getElementById("diamond5").style.transition = "2s";
    
                document.getElementById("diamond5").style.transitionDelay = "2s";
        
    document.getElementById("diamond6").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond6").style.transformOrigin = "left";
    
            document.getElementById("diamond6").style.transition = "2s";
    
                document.getElementById("diamond6").style.transitionDelay = "2.6s";
        
    document.getElementById("diamond7").style.transform = "rotateX(0deg)";
    
        document.getElementById("diamond7").style.transformOrigin = "center";
    
            document.getElementById("diamond7").style.transition = "2s";
    
                document.getElementById("diamond7").style.transitionDelay = "3.2s";
        
    document.getElementById("diamond8").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond8").style.transformOrigin = "right";
    
            document.getElementById("diamond8").style.transition = "2s";
    
                document.getElementById("diamond8").style.transitionDelay = "2.6s";
        
    document.getElementById("diamond9").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond9").style.transformOrigin = "right";
    
            document.getElementById("diamond9").style.transition = "2s";
    
                document.getElementById("diamond9").style.transitionDelay = "2s";
    
    document.getElementById("diamond10").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond10").style.transformOrigin = "left";
    
            document.getElementById("diamond10").style.transition = "2s";
    
                document.getElementById("diamond10").style.transitionDelay = "2.3s";
    
    document.getElementById("diamond11").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond11").style.transformOrigin = "left";
    
            document.getElementById("diamond11").style.transition = "2s";
    
                document.getElementById("diamond11").style.transitionDelay = "2.9s";
    
    document.getElementById("diamond12").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond12").style.transformOrigin = "right";
    
            document.getElementById("diamond12").style.transition = "2s";
    
                document.getElementById("diamond12").style.transitionDelay = "2.9s";
    
    document.getElementById("diamond13").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond13").style.transformOrigin = "right";
    
            document.getElementById("diamond13").style.transition = "2s";
    
                document.getElementById("diamond13").style.transitionDelay = "2.3s";
    
    //------------------- BUTTONS ------------------>
    
    document.getElementById("fanbutton").style.transform = "rotateY(0deg)";
    
        document.getElementById("fanbutton").style.transformOrigin = "left";
    
            document.getElementById("fanbutton").style.transition = "2s";
    
                document.getElementById("fanbutton").style.transitionDelay = "2s";
    
    document.getElementById("celebritybutton").style.transform = "rotateY(0deg)";
    
        document.getElementById("celebritybutton").style.transformOrigin = "right";
    
            document.getElementById("celebritybutton").style.transition = "2s";
    
                document.getElementById("celebritybutton").style.transitionDelay = "2s";
    
    document.getElementById("celebritysearchbutton").style.transform = "rotateX(0deg)";
    
        document.getElementById("celebritysearchbutton").style.transformOrigin = "center";
    
            document.getElementById("celebritysearchbutton").style.transition = "2s";
    
                document.getElementById("celebritysearchbutton").style.transitionDelay = "2s";
    
    //------------------- HEADINGS ------------------>
    
    document.getElementById("headersecondaryheading").style.transform = "rotateX(0deg)";
    
        document.getElementById("headersecondaryheading").style.transformOrigin = "center";
    
            document.getElementById("headersecondaryheading").style.transition = "2s";
    
                document.getElementById("headersecondaryheading").style.transitionDelay = "2s";
    
    document.getElementById("secondaryheadingbackdrop").style.transform = "rotateX(0deg)";
    
        document.getElementById("secondaryheadingbackdrop").style.transformOrigin = "center";
    
            document.getElementById("secondaryheadingbackdrop").style.transition = "2s";
    
                document.getElementById("secondaryheadingbackdrop").style.transitionDelay = "2s";
    
    //------------------- LINES ------------------>
    
    document.getElementById("line5").style.transform = "rotateY(0deg)";
    
        document.getElementById("line5").style.transformOrigin = "left";
    
            document.getElementById("line5").style.transition = "2s";
    
                document.getElementById("line5").style.transitionDelay = "0.2s";
    
    document.getElementById("line6").style.transform = "rotateY(0deg)";
    
        document.getElementById("line6").style.transformOrigin = "right";
    
            document.getElementById("line6").style.transition = "2s";
    
                document.getElementById("line6").style.transitionDelay = "0.2s";
    
}

//------------------- FAN OPEN/CLOSE SIGN UP/LOG IN TOGGLE ------------------>

$(document).ready(function() {

    $("#fanbutton").click(function() {
        
        $("#fanlogindiv").removeClass("closed");

        $("#fanlogindiv").delay(3000).addClass("open");

    });

});

$(document).ready(function() {

    $("#fanloginXbutton").click(function() {
        
        $("#fanlogindiv").removeClass("open");

        $("#fanlogindiv").delay(3000).addClass("closed");

    });

});

//------------------------ FAN SIGN UP/LOG IN TOGGLE ----------------------->

$(document).ready(function() {

    $("#tologinbutton").click(function() {
        
        $("#fansignupcontainer").removeClass("fansignup");

        $("#fansignupcontainer").addClass("fanlogin");
        
        $("#fanlogincontainer").removeClass("fansignup");

        $("#fanlogincontainer").addClass("fanlogin");

    });

});

$(document).ready(function() {

    $("#tosignupbutton").click(function() {
        
        $("#fansignupcontainer").removeClass("fanlogin");

        $("#fansignupcontainer").addClass("fansignup");
        
        $("#fanlogincontainer").removeClass("fanlogin");

        $("#fanlogincontainer").addClass("fansignup");

    });

});

//------------------- CELEBRITY LOG IN BOX OPEN ------------------>

function celebrityLogInOpen() {
    
    //----------- DIAMONDS ROTATING BACK ---------->
    
    document.getElementById("diamond1").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond1").style.transformOrigin = "left";
    
            document.getElementById("diamond1").style.transition = "2s";
    
                document.getElementById("diamond1").style.transitionDelay = "1.2s";
        
    document.getElementById("diamond2").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond2").style.transformOrigin = "left";
    
            document.getElementById("diamond2").style.transition = "2s";
    
                document.getElementById("diamond2").style.transitionDelay = "0.6s";
        
    document.getElementById("diamond3").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond3").style.transformOrigin = "right";
    
            document.getElementById("diamond3").style.transition = "2s";
    
                document.getElementById("diamond3").style.transitionDelay = "0.6s";
        
    document.getElementById("diamond4").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond4").style.transformOrigin = "right";
    
            document.getElementById("diamond4").style.transition = "2s";
    
                document.getElementById("diamond4").style.transitionDelay = "1.2s";
        
    document.getElementById("diamond5").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond5").style.transformOrigin = "left";
    
            document.getElementById("diamond5").style.transition = "2s";
    
                document.getElementById("diamond5").style.transitionDelay = "1.5s";
        
    document.getElementById("diamond6").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond6").style.transformOrigin = "left";
    
            document.getElementById("diamond6").style.transition = "2s";
    
                document.getElementById("diamond6").style.transitionDelay = "0.9s";
        
    document.getElementById("diamond7").style.transform = "rotateX(-90deg)";
    
        document.getElementById("diamond7").style.transformOrigin = "center";
    
            document.getElementById("diamond7").style.transition = "2s";
    
                document.getElementById("diamond7").style.transitionDelay = "0.3s";
        
    document.getElementById("diamond8").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond8").style.transformOrigin = "right";
    
            document.getElementById("diamond8").style.transition = "2s";
    
                document.getElementById("diamond8").style.transitionDelay = "0.9s";
        
    document.getElementById("diamond9").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond9").style.transformOrigin = "right";
    
            document.getElementById("diamond9").style.transition = "2s";
    
                document.getElementById("diamond9").style.transitionDelay = "1.5s";
    
    document.getElementById("diamond10").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond10").style.transformOrigin = "left";
    
            document.getElementById("diamond10").style.transition = "2s";
    
                document.getElementById("diamond10").style.transitionDelay = "1.2s";
    
    document.getElementById("diamond11").style.transform = "rotateY(90deg)";
    
        document.getElementById("diamond11").style.transformOrigin = "left";
    
            document.getElementById("diamond11").style.transition = "2s";
    
                document.getElementById("diamond11").style.transitionDelay = "0.6s";
    
    document.getElementById("diamond12").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond12").style.transformOrigin = "right";
    
            document.getElementById("diamond12").style.transition = "2s";
    
                document.getElementById("diamond12").style.transitionDelay = "0.6s";
    
    document.getElementById("diamond13").style.transform = "rotateY(-90deg)";
    
        document.getElementById("diamond13").style.transformOrigin = "right";
    
            document.getElementById("diamond13").style.transition = "2s";
    
                document.getElementById("diamond13").style.transitionDelay = "1.2s";
    
    //------------------- BUTTONS ------------------>
    
    document.getElementById("fanbutton").style.transform = "rotateY(90deg)";
    
        document.getElementById("fanbutton").style.transformOrigin = "left";
    
            document.getElementById("fanbutton").style.transition = "2s";
    
                document.getElementById("fanbutton").style.transitionDelay = "0.6s";
    
    document.getElementById("celebritybutton").style.transform = "rotateY(-90deg)";
    
        document.getElementById("celebritybutton").style.transformOrigin = "right";
    
            document.getElementById("celebritybutton").style.transition = "2s";
    
                document.getElementById("celebritybutton").style.transitionDelay = "0.6s";
    
    document.getElementById("celebritysearchbutton").style.transform = "rotateX(-90deg)";
    
        document.getElementById("celebritysearchbutton").style.transformOrigin = "center";
    
            document.getElementById("celebritysearchbutton").style.transition = "2s";
    
                document.getElementById("celebritysearchbutton").style.transitionDelay = "0.6s";
    
    //------------------- HEADINGS ------------------>
    
    document.getElementById("headersecondaryheading").style.transform = "rotateX(90deg)";
    
        document.getElementById("headersecondaryheading").style.transformOrigin = "center";
    
            document.getElementById("headersecondaryheading").style.transition = "2s";
    
                document.getElementById("headersecondaryheading").style.transitionDelay = "0.6s";
    
    document.getElementById("secondaryheadingbackdrop").style.transform = "rotateX(90deg)";
    
        document.getElementById("secondaryheadingbackdrop").style.transformOrigin = "center";
    
            document.getElementById("secondaryheadingbackdrop").style.transition = "2s";
    
                document.getElementById("secondaryheadingbackdrop").style.transitionDelay = "0.6s";
    
    //------------------- LINES ------------------>
    
    document.getElementById("line5").style.transform = "rotateY(90deg)";
    
        document.getElementById("line5").style.transformOrigin = "left";
    
            document.getElementById("line5").style.transition = "2s";
    
                document.getElementById("line5").style.transitionDelay = "2s";
    
    document.getElementById("line6").style.transform = "rotateY(90deg)";
    
        document.getElementById("line6").style.transformOrigin = "right";
    
            document.getElementById("line6").style.transition = "2s";
    
                document.getElementById("line6").style.transitionDelay = "2s";
    
}

//------------------- CELEBRITY LOG IN BOX CLOSE ------------------>

function celebrityLogInClose() {
    
    //----------- DIAMONDS ROTATING BACK ---------->
    
    document.getElementById("diamond1").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond1").style.transformOrigin = "left";
    
            document.getElementById("diamond1").style.transition = "2s";
    
                document.getElementById("diamond1").style.transitionDelay = "2.3s";
        
    document.getElementById("diamond2").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond2").style.transformOrigin = "left";
    
            document.getElementById("diamond2").style.transition = "2s";
    
                document.getElementById("diamond2").style.transitionDelay = "2.9s";
        
    document.getElementById("diamond3").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond3").style.transformOrigin = "right";
    
            document.getElementById("diamond3").style.transition = "2s";
    
                document.getElementById("diamond3").style.transitionDelay = "2.9s";
        
    document.getElementById("diamond4").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond4").style.transformOrigin = "right";
    
            document.getElementById("diamond4").style.transition = "2s";
    
                document.getElementById("diamond4").style.transitionDelay = "2.3s";
        
    document.getElementById("diamond5").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond5").style.transformOrigin = "left";
    
            document.getElementById("diamond5").style.transition = "2s";
    
                document.getElementById("diamond5").style.transitionDelay = "2s";
        
    document.getElementById("diamond6").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond6").style.transformOrigin = "left";
    
            document.getElementById("diamond6").style.transition = "2s";
    
                document.getElementById("diamond6").style.transitionDelay = "2.6s";
        
    document.getElementById("diamond7").style.transform = "rotateX(0deg)";
    
        document.getElementById("diamond7").style.transformOrigin = "center";
    
            document.getElementById("diamond7").style.transition = "2s";
    
                document.getElementById("diamond7").style.transitionDelay = "3.2s";
        
    document.getElementById("diamond8").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond8").style.transformOrigin = "right";
    
            document.getElementById("diamond8").style.transition = "2s";
    
                document.getElementById("diamond8").style.transitionDelay = "2.6s";
        
    document.getElementById("diamond9").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond9").style.transformOrigin = "right";
    
            document.getElementById("diamond9").style.transition = "2s";
    
                document.getElementById("diamond9").style.transitionDelay = "2s";
    
    document.getElementById("diamond10").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond10").style.transformOrigin = "left";
    
            document.getElementById("diamond10").style.transition = "2s";
    
                document.getElementById("diamond10").style.transitionDelay = "2.3s";
    
    document.getElementById("diamond11").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond11").style.transformOrigin = "left";
    
            document.getElementById("diamond11").style.transition = "2s";
    
                document.getElementById("diamond11").style.transitionDelay = "2.9s";
    
    document.getElementById("diamond12").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond12").style.transformOrigin = "right";
    
            document.getElementById("diamond12").style.transition = "2s";
    
                document.getElementById("diamond12").style.transitionDelay = "2.9s";
    
    document.getElementById("diamond13").style.transform = "rotateY(0deg)";
    
        document.getElementById("diamond13").style.transformOrigin = "right";
    
            document.getElementById("diamond13").style.transition = "2s";
    
                document.getElementById("diamond13").style.transitionDelay = "2.3s";
    
    //------------------- BUTTONS ------------------>
    
    document.getElementById("fanbutton").style.transform = "rotateY(0deg)";
    
        document.getElementById("fanbutton").style.transformOrigin = "left";
    
            document.getElementById("fanbutton").style.transition = "2s";
    
                document.getElementById("fanbutton").style.transitionDelay = "2s";
    
    document.getElementById("celebritybutton").style.transform = "rotateY(0deg)";
    
        document.getElementById("celebritybutton").style.transformOrigin = "right";
    
            document.getElementById("celebritybutton").style.transition = "2s";
    
                document.getElementById("celebritybutton").style.transitionDelay = "2s";
    
    document.getElementById("celebritysearchbutton").style.transform = "rotateX(0deg)";
    
        document.getElementById("celebritysearchbutton").style.transformOrigin = "center";
    
            document.getElementById("celebritysearchbutton").style.transition = "2s";
    
                document.getElementById("celebritysearchbutton").style.transitionDelay = "2s";
    
    //------------------- HEADINGS ------------------>
    
    document.getElementById("headersecondaryheading").style.transform = "rotateX(0deg)";
    
        document.getElementById("headersecondaryheading").style.transformOrigin = "center";
    
            document.getElementById("headersecondaryheading").style.transition = "2s";
    
                document.getElementById("headersecondaryheading").style.transitionDelay = "2s";
    
    document.getElementById("secondaryheadingbackdrop").style.transform = "rotateX(0deg)";
    
        document.getElementById("secondaryheadingbackdrop").style.transformOrigin = "center";
    
            document.getElementById("secondaryheadingbackdrop").style.transition = "2s";
    
                document.getElementById("secondaryheadingbackdrop").style.transitionDelay = "2s";
    
    //------------------- LINES ------------------>
    
    document.getElementById("line5").style.transform = "rotateY(0deg)";
    
        document.getElementById("line5").style.transformOrigin = "left";
    
            document.getElementById("line5").style.transition = "2s";
    
                document.getElementById("line5").style.transitionDelay = "0.2s";
    
    document.getElementById("line6").style.transform = "rotateY(0deg)";
    
        document.getElementById("line6").style.transformOrigin = "right";
    
            document.getElementById("line6").style.transition = "2s";
    
                document.getElementById("line6").style.transitionDelay = "0.2s";
    
}

//------------------- CELEBRITY OPEN/CLOSE LOG IN TOGGLE ------------------>

$(document).ready(function() {

    $("#celebritybutton").click(function() {
        
        $("#celebritylogindiv").removeClass("closed");

        $("#celebritylogindiv").delay(3000).addClass("open");

    });

});

$(document).ready(function() {

    $("#celebrityloginXbutton").click(function() {
        
        $("#celebritylogindiv").removeClass("open");

        $("#celebritylogindiv").delay(3000).addClass("closed");

    });

});

*/

//------------------- THE END ------------------>