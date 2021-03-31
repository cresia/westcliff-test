$(document).ready(function() {
  $(".selected").click(function() {
    if(!$(this).hasClass("active")) {
      $(this).addClass("active").css({"background-color":"#9ed034", "cursor": "pointer"});
    } else {
      $(this).removeClass("active").css("background-color", "#EEFFE6");
    }
  });


  // dispplay box activity
  $("td").click(function() {
    var content = $(this).text();

    var column = $(this).index();
    var index1 = $('th').eq(column).text();

    if(content != "Not Available") {
      $(this).toggleClass("tdhighlight");

      if($(this).hasClass("tdhighlight")) {
        // $('#displaySelected').css("visibility", "visible");
        // $("#displaySelected").css("margin-top", "2em");
        $("#result").append("<p>" + content + " at " + index1 + "</p>")
      } else {
        $('#result p:contains(' + content + ')').remove();

        if($('#result').has('p').length == false) {
          $('#displaySelected').css("visibility", "hidden");
          $("#displaySelected").css("margin-top", "0");
        }
      }

    }
  })


})
