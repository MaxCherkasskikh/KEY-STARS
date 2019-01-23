//------------------- TIME BLOCK POSITION FUNCTION ------------------>

clickCount = 1;

function rightTimeClick() {

    clickCount++;
    
    if (clickCount > 3) {
        
        clickCount = 3;
        
    }
    
    clickTimeTracker();

}

function leftTimeClick() {

    clickCount--;
    
    if (clickCount < 1) {
        
        clickCount = 1;
        
    }
    
    clickTimeTracker();

}

function clickTimeTracker() {
    
    if (clickCount === 1) {

        $("#block1").addClass("position1").removeClass("position2 position3");

        $("#block2").addClass("position1").removeClass("position2 position3");

        $("#block3").addClass("position1").removeClass("position2 position3");

    }

    if (clickCount === 2) {

        $("#block1").addClass("position2").removeClass("position1 position3");

        $("#block2").addClass("position2").removeClass("position1 position3");

        $("#block3").addClass("position2").removeClass("position1 position3");

    }

    if (clickCount === 3) {

        $("#block1").addClass("position3").removeClass("position1 position2");

        $("#block2").addClass("position3").removeClass("position1 position2");

        $("#block3").addClass("position3").removeClass("position1 position2");

    }
    
}

//------------------- TIME X TOGGLE FUNCTION ------------------>

$(document).ready(function() {
    
    $("#Xbutton1").click(function() {
        
        $("#Xbutton1").toggleClass("off1");
        
        $("#time1-1button").toggleClass("buttonoff1");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton2").click(function() {
        
        $("#Xbutton2").toggleClass("off2");
        
        $("#time2-1button").toggleClass("buttonoff2");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton3").click(function() {
        
        $("#Xbutton3").toggleClass("off3");
        
        $("#time3-1button").toggleClass("buttonoff3");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton4").click(function() {
        
        $("#Xbutton4").toggleClass("off4");
        
        $("#time4-1button").toggleClass("buttonoff4");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton5").click(function() {
        
        $("#Xbutton5").toggleClass("off5");
        
        $("#time5-1button").toggleClass("buttonoff5");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton6").click(function() {
        
        $("#Xbutton6").toggleClass("off6");
        
        $("#time6-1button").toggleClass("buttonoff6");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton7").click(function() {
        
        $("#Xbutton7").toggleClass("off7");
        
        $("#time1-2button").toggleClass("buttonoff7");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton8").click(function() {
        
        $("#Xbutton8").toggleClass("off8");
        
        $("#time2-2button").toggleClass("buttonoff8");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton9").click(function() {
        
        $("#Xbutton9").toggleClass("off9");
        
        $("#time3-2button").toggleClass("buttonoff9");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton10").click(function() {
        
        $("#Xbutton10").toggleClass("off10");
        
        $("#time4-2button").toggleClass("buttonoff10");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton11").click(function() {
        
        $("#Xbutton11").toggleClass("off11");
        
        $("#time5-2button").toggleClass("buttonoff11");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton12").click(function() {
        
        $("#Xbutton12").toggleClass("off12");
        
        $("#time6-2button").toggleClass("buttonoff12");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton13").click(function() {
        
        $("#Xbutton13").toggleClass("off13");
        
        $("#time1-3button").toggleClass("buttonoff13");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton14").click(function() {
        
        $("#Xbutton14").toggleClass("off14");
        
        $("#time2-3button").toggleClass("buttonoff14");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton15").click(function() {
        
        $("#Xbutton15").toggleClass("off15");
        
        $("#time3-3button").toggleClass("buttonoff15");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton16").click(function() {
        
        $("#Xbutton16").toggleClass("off16");
        
        $("#time4-3button").toggleClass("buttonoff16");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton17").click(function() {
        
        $("#Xbutton17").toggleClass("off17");
        
        $("#time5-3button").toggleClass("buttonoff17");
        
    });
    
});

$(document).ready(function() {
    
    $("#Xbutton18").click(function() {
        
        $("#Xbutton18").toggleClass("off18");
        
        $("#time6-3button").toggleClass("buttonoff18");
        
    });
    
});

//------------ CALLER INFO REVEAL FUNCTION ----------->

function callerInfoReveal() {

    $("#timeInfoDiv").toggleClass("infoClosed infoOpen");
    
    $("#toSeeCallInfoDiv").toggleClass("infoClosed infoOpen");
    
};

//--------------------- THE END -------------------->