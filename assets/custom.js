$(function() {
  var showHideCredits = function (currentSlide) {
    var section = $(currentSlide)

    var credit = section.data("credit")
    var link = section.data("image-link")

    var creditDiv = $("#credit")

    if (link) {
      creditDiv.empty()

      creditDiv.append($("<span class='credit-phote'>Photo:&nbsp;</span>"))

      if (credit) {
        creditDiv.append($("<span class='credit-credit'>" + credit + "&nbsp;</span>"))
      }

      if (link) {
        creditDiv.append($("<a href='" + link + "' target='_blank' class='credit-link'>" + link + "</span>"))
      }

      creditDiv.fadeIn(500)
    } else {
      creditDiv.fadeOut(500)
    }
  }

  Reveal.addEventListener( 'slidechanged', function( event ) {
    showHideCredits(event.currentSlide)
  });

  Reveal.addEventListener( 'ready', function( event ) {
    showHideCredits(event.currentSlide)
  });
})