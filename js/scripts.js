var re0 = /[0]/;
var re1 = /[1]/;

var beepBoop = function(number) {
  var array = [];
  for (var i = 0; i <= number; i++) {
//    debugger;
    if (i === 42) {
      array.push("The answer to life, the universe, and everything")
    } else if (i.toString().match(re1)) {
      array.push("Boop!");
    } else if (i.toString().match(re0)) {
      array.push("Beep!");
    } else if (i % 3 === 0) {
      array.push("I'm sorry, " + document.getElementById("name").value + ". I'm afraid I can't do that.");
    } else if (i % 4 === 0) {
      array.push("ALL YOUR BASE ARE BELONG TO US!");
    } else if (i % 5 === 0) {
      array.push("It follows the law of fives! Hail Eris! All hail Discordia!")
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
