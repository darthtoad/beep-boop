var re0 = /[0]/;
var re1 = /[1]/;
var re3 = /[3]/;
var re7 = /[7]/;
var re9 = /[9]/;

var beepBoop = function(number) {
  var array = [];
  for (var i = 0; i <= number; i++) {
//    debugger;
    if (i === 42) {
      array.push("The answer to life, the universe, and everything.")
    } else if (i.toString().match(re0)) {
      array.push("Beep!");
    } else if (i.toString().match(re1)) {
      array.push("Boop!");
    } else if (i % 3 === 0) {
      array.push("I'm sorry, " + document.getElementById("name").value + ". I'm afraid I can't do that.");
    } else if (i % 4 === 0) {
      array.push("ALL YOUR BASE ARE BELONG TO US!");
    } else if (i % 5 === 0) {
      array.push("It follows the law of fives! Hail Eris! All hail Discordia!")
    } else if (i.toString().match(re7)) {
      array.push("Must be your lucky day.")
    } else if (i % 2 === 0) {
      array.push("Even Steven.")
    } else if (i.toString().match(re3)) {
      array.push("Three's company!")
    } else if (i.toString().match(re9)) {
      array.push("I AM SAMUS, OF THE 9TH CASTLE, OF THE 9TH LAND, OF THE 9TH NATION, OF THE 9TH WORLD, OF THE 9TH SOLAR SYSTEM, OF THE 9TH GALAXY, OF THE 9TH SUPERCLUSTER, OF THE 9TH UNIVERSE, OF THE 8TH DIMENSION, OF THE 9TH EYE OF GOD, KNIGHT OF THE ROUND-SHAPED CIRCULAR OVAL TABLE, CO-EMPEROR OF CASCADIA, CO-REGENT OF APPALACHIA, AND DEFENDER OF SILLINESS AND JUST US!!!")
    } else {
      array.push(i);
    }
  }
  if (document.getElementById("reverse").checked) {
    array.reverse();
  }
  var endString = array.join(" ");
  return endString;
}

$(document).ready(function(){
  $("#theForm").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    var number = $("#number").val();
    var result = beepBoop(number);
    $("#result").append(result);
  })
})
