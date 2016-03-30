$(function(){

  var translate = function(input) {
    var total = 0;
    for (var d=0; d<input.length; d++) {
      total += (input[d]) * (Math.pow(2, d));
    }
    return total;
  }

  $("form").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val().split("");
    number.reverse();
    var final = translate(number);
    $(".output").text(parseInt(final));
  });
});
