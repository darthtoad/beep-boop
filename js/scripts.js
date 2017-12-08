var beepBoop = function(number) {
  //debugger;
  var array = []
  for (var i = 1; i <= number; i++) {
    array.push(i);
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
