// pull the current hour in 24 hour format and establish current day
var currentHour = moment().format('HH');
var currentDateTime = moment().format('dddd MMMM YYYY');
$("#currentDay").text(currentDateTime);

// $("#9button").on("click", function(){
//     var nineAM = $("#9").val();
//    localStorage.setItem('nineAmToDos', nineAM);
// });

for(var i = 9; i < 17; i++){
    var currentButton = $('#' + i + 'button');

    var currentTextBox = $('#' + i);

    // var currentUserInputedText = 'userInputedText' + i;

    // currentButton.on('click', function(){
    //     var userAgendaItem = currentTextBox.val();
    //     localStorage.setItem(currentUserInputedText, userAgendaItem);
    // });
};


$('#timeBlockContainer').on('click', '.buttonToBeSaved', function(e){
    var currentID = ($(e.target).siblings().next().attr('id'));
    localStorage.setItem(currentID, $(`#${currentID}`).val());
});

// on page load: color the text boxes
$(document).ready(function (){

    for(var i=9; i<=17; i++){

        // create a variable that concatenates to get the html element
        // var currentRef = $('#' + i);
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
