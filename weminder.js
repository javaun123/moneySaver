$('#shareBtn').hide();

var clock = 60000;
$('#half').click(function(){
    clock = 30000;
});
$('#hour').click(function(){
    clock = 60000*60;
});
$('#hourHalf').click(function(){
    clock = 60000*90;
});
$('#twohour').click(function(){
    clock = 60000*120;
});
function myFunction() {
    console.log(clock);
    clock = clock + clock;
    if(clock >= 60000*720){
        alert("It's about time to stop drinking water. Too much of anything isn't good!");
    }
    alert("It's time to drink some H20");
    $('#shareBtn').show();
}