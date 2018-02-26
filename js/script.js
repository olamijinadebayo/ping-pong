var input;
var count = function () {


  for (var i = 1; i <= input; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      $(".display").append("<li>" + "pingpong" + "</li>");
    } else if (i % 3 === 0) {
      $(".display").append("<li>" + "ping" + "</li>");
    } else if (i % 5 === 0) {
      $(".display").append("<li>" + "pong" + "</li>");
    } else {
      $(".display").append("<li>" + i + "</>");
    }
  }
  // return s;
};
$(document).ready(function () {
  $("#enter form").submit(function (e) {
    $(".display").empty();
    e.preventDefault();
    input = parseInt($("#info").val());
    var output = count(input);
    $(".display").text(output);
  });
});