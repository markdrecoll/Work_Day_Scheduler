var currentHour = moment().format('HH');
$('#currentDay').text(currentHour);

var time = moment().format('dddd MMMM YYYY');
$("#currentDay").text(time);


// var nineAM = $('#9amInput').val();

$("#9amButton").on("click", function(){
    var nineAM = $("#9amInput").val();
    alert(nineAM);
});