var inp;
var count = function () {

  var s = [];
  for (var i = 1; i <= inp; i++) {
    // s.push(3);
    if ((i % 3 === 0) && (i % 5 === 0)) {
      s.push("ping pong");
    } else if (i % 3 === 0) {
      s.push("ping");
    } else if (i % 5 === 0) {
      s.push("pong");
    } else {
      s.push(i);
    }
    // if (i < (inp)) {
    //   s += ',';
    // }
    // s += i;
    // s.push(i++);
  }
  return s;
};
$(document).ready(function () {
  $("#enter form").submit(function (e) {
    e.preventDefault();
    inp = parseInt($("#info").val());

    var input = count(inp);
    console.log(input);
    // var darray = [];

  });
});