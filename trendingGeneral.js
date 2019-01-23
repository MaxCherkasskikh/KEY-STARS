//------------------- TIME BLOCK POSITION FUNCTION ------------------>

function followingSection() {

    $("#followingDiv").addClass("followingPosition").removeClass("suggestedPosition");

    $("#suggestedDiv").addClass("followingPosition").removeClass("suggestedPosition");
    
}

function suggestedSection() {

    $("#followingDiv").addClass("suggestedPosition").removeClass("followingPosition");

    $("#suggestedDiv").addClass("suggestedPosition").removeClass("followingPosition");
    
}

//--------------------- THE END -------------------->