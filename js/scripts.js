var re0 = /[0]/;
var re1 = /[1]/;
var re3 = /[3]/;
var re7 = /[7]/;
var re9 = /[9]/;
var array = [];

var beepBoop = function(number, name, reverse) {
  if (number < 0) {
    return "Negative numbers break the internet";
  } else {
    for (var i = 0; i <= number; i++) {
  //    debugger;
      if (i === 42) {
        array.push(answer)
      } else if (i.toString().match(re0)) {
        array.push(beep);
      } else if (i.toString().match(re1)) {
        array.push(boop);
      } else if (i % 3 === 0) {
        array.push(sorry + name + afraid);
      } else if (i % 4 === 0) {
        array.push(base);
      } else if (i % 5 === 0) {
        array.push(eris);
      } else if (i.toString().match(re7)) {
        array.push(lucky + name + endLucky);
      } else if (i % 2 === 0) {
        array.push(even);
      } else if (i.toString().match(re3)) {
        array.push(three);
      } else if (i.toString().match(re9)) {
        array.push(samus);
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
var beep = "<li>Beep!</li>";

var boop = "<li>Boop!</li>";

var sorry = "<li>I'm sorry, ";

var afraid = ". I'm afraid I can't do that.</li>";

var lucky = "<li>Must be your lucky day, ";

var endLucky = ".</li>"

var three = "<li>Three's company!</li>";

var even = "<li>Even Steven.</li>";

var base = "<li>ALL YOUR BASE ARE BELONG TO US!</li>";

var eris = "<li>It follows the law of fives! Hail Eris! All hail Discordia!</li>";

var samus = "<li>I AM SAMUS, OF THE 9TH CASTLE, OF THE 9TH LAND, OF THE 9TH NATION, OF THE 9TH WORLD, OF THE 9TH SOLAR SYSTEM, OF THE 9TH GALAXY, OF THE 9TH SUPERCLUSTER, OF THE 9TH UNIVERSE, OF THE 8TH DIMENSION, OF THE 9TH EYE OF GOD, KNIGHT OF THE ROUND-SHAPED CIRCULAR OVAL TABLE, CO-EMPEROR OF CASCADIA, CO-REGENT OF APPALACHIA, AND DEFENDER OF SILLINESS AND JUST US</li>";

var answer = "<li>The answer to life, the universe, and everything.</li>";

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
