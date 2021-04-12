// pull the current hour in 24 hour format and establish current day
var currentHour = moment().format('HH');
var currentDateTime = moment().format('dddd MMMM YYYY');
$("#currentDay").text(currentDateTime);

// start the for loop at 9 and cycle through the morning hours
for(var i = 9; i < 17; i++){

    // create a variable for getting the id of the textbox and button
    var currentButton = $('#' + i + 'button');
    var currentTextBox = $('#' + i);
};

// get user text then save it to local storage
$('#timeBlockContainer').on('click', '.buttonToBeSaved', function(e){
    var currentID = ($(e.target).siblings().next().attr('id'));
    localStorage.setItem(currentID, $(`#${currentID}`).val());
});

// on page load: color the text boxes
$(document).ready(function (){
    
    // start the for loop at 9 and cycle through the morning hours
    for(var i=9; i<=17; i++){

        // create a variable that concatenates to get the html element
        var currentRef = $(`#${i}`);

        console.log(currentRef);
        $(`#${i}`).val(localStorage.getItem(i));

        // use an if statement to compare textbox's time value against real world time
        if(currentHour > i){
            $(currentRef).addClass('past');
        }else if(currentHour == i){
            $(currentRef).addClass('present');
        }else{
            $(currentRef).addClass('future');
        }
    }
});
