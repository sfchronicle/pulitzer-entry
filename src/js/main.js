require("./lib/social"); //Do not delete

(function blink() {
  $('.blink').fadeOut(500).fadeIn(500, blink);
})();

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=397224597281471';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$(window).scroll(function () {
  var s = $(window).scrollTop(),
		  d = $(document).height(),
		  c = $(window).height(),
  		scrollPercent = (s / (d-c)) * 100;
  var position = scrollPercent;

  // console.log(s);
  if (s > 0) {
    $('#fixednav').fadeIn(800)
    $("#fixednav").css("visibility","visible");
  } else {
    $('#fixednav').fadeOut(800)
    $("#fixednav").css("visibility","hidden");
  }

  $("progress").attr('value', position);

  navDisplay(s);

});

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});


var scrolllist = ["hours12","day1","day2","day3","day4","day5","day6","future"];
var navIDX = -1;
var navDisplay = function() {

  var pos = document.body.scrollTop || document.documentElement.scrollTop;
  var start_top = 30;
  var pos_map_top = $('#hours12').offset().top-start_top;

  $(".navlink").removeClass("activelink");
  navIDX = -1;
  for (var i=0; i<scrolllist.length; i++){
    var pos_map = $('#'+scrolllist[i]).offset().top - pos - start_top;
    if (pos_map < 0) {
      navIDX = i;
    }
  }
  console.log(navIDX);
  if (navIDX > -1){
    $("#"+scrolllist[navIDX]+"nav").addClass("activelink");
  }
};
