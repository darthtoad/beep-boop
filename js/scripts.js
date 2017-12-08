function beepBoop(number) {
  
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
