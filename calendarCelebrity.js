//---------------- CALENDAR TEMPLATE --------------->

function nextMonth() {
    
    document.getElementById("currentMonthCalendarContainer").style.left = "-110%";
    
    document.getElementById("currentMonthCalendarContainer").style.transition = "1s";
    
    document.getElementById("currentMonthCalendarContainer").style.transitionDelay = "0.2s";
    
    document.getElementById("nextMonthCalendarContainer").style.left = "0.5%";
    
    document.getElementById("nextMonthCalendarContainer").style.transition = "1s";
    
    document.getElementById("nextMonthCalendarContainer").style.transitionDelay = "0.2s";
    
    document.getElementById("monthName").innerHTML = "NOVEMBER";
    
};

function previousMonth() {
    
    document.getElementById("currentMonthCalendarContainer").style.left = "0.5%";
    
    document.getElementById("currentMonthCalendarContainer").style.transition = "1s";
    
    document.getElementById("currentMonthCalendarContainer").style.transitionDelay = "0.2s";
    
    document.getElementById("nextMonthCalendarContainer").style.left = "110%";
    
    document.getElementById("nextMonthCalendarContainer").style.transition = "1s";
    
    document.getElementById("nextMonthCalendarContainer").style.transitionDelay = "0.2s";
    
    document.getElementById("monthName").innerHTML = "OCTOBER";
    
};

//--------------------- THE END -------------------->