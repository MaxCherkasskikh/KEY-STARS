//------------------ FAN PAY NOW PAGE ----------------->

function cardSelectionVisa() {
    
    $("#finalCardSelectorBorder").addClass("visa").removeClass("none mastercard amex");
    
}

function cardSelectionMasterCard() {
    
    $("#finalCardSelectorBorder").addClass("mastercard").removeClass("none visa amex");
    
}

function cardSelectionAmex() {
    
    $("#finalCardSelectorBorder").addClass("amex").removeClass("none visa mastercard");
    
}

//----------------------- THE END ---------------------->