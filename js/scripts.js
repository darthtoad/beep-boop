var re0 = /[0]/;
var re1 = /[1]/;
var re3 = /[3]/;
var re7 = /[7]/;
var re9 = /[9]/;
var array = [];

var beepBoop = function(number, name, reverse) {
  if (number < 0) {
    return negative;
  } else {
    for (var i = 0; i <= number; i++) {
  //    debugger;
      if (i === 42) {
        array.push(i + answer)
      } else if (i.toString().match(re0)) {
        array.push(i + beep);
      } else if (i.toString().match(re1)) {
        array.push(i + boop);
      } else if (i % 3 === 0) {
        array.push(i + sorry + name + afraid);
      } else if (i % 4 === 0) {
        array.push(i + base);
      } else if (i % 5 === 0) {
        array.push(i + eris);
      } else if (i.toString().match(re7)) {
        array.push(i + lucky + name + ".");
      } else if (i % 2 === 0) {
        array.push(i + even);
      } else if (i.toString().match(re3)) {
        array.push(i + three);
      } else if (i.toString().match(re9)) {
        array.push(i + samus);
      } else {
        array.push(i);
      }
    }
    if (reverse) {
      array.reverse();
    }
    console.log(array);
    var endString = array.join(" ");
    return endString;
  }
};

//Beginning of front-end code
var negative = "Negative numbers break the internet";

var beep = ". Beep!<br>";

var boop = ". Boop!<br>";

var sorry = ". I'm sorry, ";

var afraid = ". I'm afraid I can't do that.<br>";

var lucky = ". Must be your lucky day, "

var three = ". Three's company!<br>";

var even = ". Even Steven.<br>";

var base = ". ALL YOUR BASE ARE BELONG TO US!<br>";

var eris = ". It follows the law of fives! Hail Eris! All hail Discordia!<br>";

var samus = ". I AM SAMUS, OF THE 9TH CASTLE, OF THE 9TH LAND, OF THE 9TH NATION, OF THE 9TH WORLD, OF THE 9TH SOLAR SYSTEM, OF THE 9TH GALAXY, OF THE 9TH SUPERCLUSTER, OF THE 9TH UNIVERSE, OF THE 8TH DIMENSION, OF THE 9TH EYE OF GOD, KNIGHT OF THE ROUND-SHAPED CIRCULAR OVAL TABLE, CO-EMPEROR OF CASCADIA, CO-REGENT OF APPALACHIA, AND DEFENDER OF SILLINESS AND JUST US<br>";

var answer = ". The answer to life, the universe, and everything.<br>";

$(document).ready(function(){
  $("#theForm").submit(function(event){
    event.preventDefault();
    array = [];
    $("#result").empty();
    var name = document.getElementById("name").value;
    var reverse = document.getElementById("reverse").checked;
    var number = $("#number").val();
    var result = beepBoop(number, name, reverse);
    $("#result").append(result);
  })
})
