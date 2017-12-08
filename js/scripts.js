var re0 = /[0]/;
var re1 = /[1]/;

var beepBoop = function(number) {
  var array = []
  for (var i = 0; i <= number; i++) {
//    debugger;
    if (i.toString().match(re1)) {
      array.push("Boop!");
    } else if (i.toString().match(re0)) {
      array.push("Beep!")
    } else if (i === 3) {
      array.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else {
      array.push(i);
    }
    i = parseInt(i);
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
