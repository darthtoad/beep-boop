var beepBoop = function(number) {
  //debugger;
  var array = []
  for (var i = 0; i <= number; i++) {
    if (i === 0) {
      array.push("Beep!")
    } else if (i === 1) {
      array.push("Boop!")
    } else if (i === 3) {
      array.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else {
      array.push(i);
    }
  }
  var endString = array.join(" ");
  return endString;
}

$(document).ready(function(){
  $("#theForm").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    var number = parseInt($("#number").val());
    var result = beepBoop(number);
    $("#result").append(result);
  })
})
