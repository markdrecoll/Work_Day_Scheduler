var currentHour = moment().format('HH');
$('#currentDay').text(currentHour);

var time = moment().format('dddd MMMM YYYY');
$("#currentDay").text(time);

$("#9button").on("click", function(){
    var nineAM = $("#9").val();

   //get the reference to the 9am text box here
   localStorage.setItem('nineAmToDos', nineAM);

});


$(document).ready(function (){
    console.log("page loaded");
    var nineAmToDo = localStorage.getItem('nineAmToDos');
    $("#9").val(nineAmToDo);
    $("#10").val("test");

    for(var i=9; i<=19; i++){

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
