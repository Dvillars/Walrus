$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});
$(document).ready(function() {
  $(".fact-click").click(function() {
    $('#fade-in').fadeToggle();
  });
});
