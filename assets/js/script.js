var currentHour = moment().format('HH');
$('#currentDay').text(currentHour);

var time = moment().format('dddd MMMM YYYY');
$("#currentDay").text(time);

// $("#9button").on("click", function(){
//     var nineAM = $("#9").val();
//    localStorage.setItem('nineAmToDos', nineAM);
// });

for(var i = 9; i < 17; i++){
    var currentButton = $('#' + i + 'button');

    var currentTextBox = $('#' + i);

    var currentUserInputedText = 'userInputedText' + i;

    currentButton.on('click', function(){
        var userAgendaItem = currentTextBox.val();
        localStorage.setItem(currentUserInputedText, userAgendaItem);
    });
};

$(document).ready(function (){
    console.log("page loaded");
    var nineAmToDo = localStorage.getItem('nineAmToDos');

    $("#10").val("test");

    for(var i=9; i<=17; i++){

        // create a variable that concatenates to get the html element
        var currentRef = $('#' + i);

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
