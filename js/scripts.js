$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".fact-click").click(function() {
    $('#fade-in').fadeToggle();
  });
  $('#green').click(function() {
    $("body").removeClass();
    $('body').addClass('green-bg');
  });
  $('#yellow').click(function() {
    $("body").removeClass();
    $('body').addClass('yellow-bg');
  });
  $('#red').click(function() {
    $("body").removeClass();
    $('body').addClass('red-bg');
  });



  $("#hello").click(function() {
    $("#user").prepend("<li>Hello!</li>");
    $("#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#goodbye").click(function() {
    $("#user").prepend("<li>Goodbye!</li>");
    $("#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#stop").click(function() {
    $("#user").prepend("<li>Stop copying me!</li>");
    $("#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
