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
  if (screen.width > 340){
    if (s > 0) {
      $('#fixednav').fadeIn(800)
      $("#fixednav").css("visibility","visible");
    } else {
      $('#fixednav').fadeOut(800)
      $("#fixednav").css("visibility","hidden");
    }
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



// push alerts
function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};

$( "#runalerts" ).click(function() {
  $('.message-left').remove();
  alerts();
});

function alerts() {
  var chatDelay = 0;
  $.each(chatMessages, function(i, obj) {
    chatDelay = chatDelay + 2000;
    var chatDelay2 = chatDelay + 300;
    var chatDelay3 = chatDelay2 + 10;
    var scrollDelay = chatDelay;
    var chatTimeString = " ";
    var msgname = "." + obj.id;
    var msginner = ".messageinner-" + obj.id;
    chatTimeString = "<span class='message-time'>" + obj.day + ", " + obj.date + ", " + obj.time + "</span>";
    $(".chat-message-list").append("<li class='message-left hidden><div class='sp-" + obj.id + "'></div><div class='messageinner-" + obj.id + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
    $(msgname).delay(chatDelay).fadeIn();
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });
}

alerts();


// show the about the data box
var timestamp_buttons = document.getElementsByClassName("timestamp-link");
for (var tidx=0; tidx < timestamp_buttons.length; tidx++){
  timestamp_buttons[tidx].addEventListener("click",function(t) {
    document.getElementById("aboutthedata-box").classList.add("active");
    document.getElementById("aboutthedata-overlay").classList.add("active");
    $('body').addClass('noscroll');
    $("#img"+t.target.id.split("t")[1]).addClass("showme");
  });
};

document.getElementById("read229am").addEventListener("click",function(t) {
  document.getElementById("aboutthedata-box").classList.add("active");
  document.getElementById("aboutthedata-overlay").classList.add("active");
  $('body').addClass('noscroll');
  $("#img12").addClass("showme");
});

document.getElementById("read503am").addEventListener("click",function(t) {
  document.getElementById("aboutthedata-box").classList.add("active");
  document.getElementById("aboutthedata-overlay").classList.add("active");
  $('body').addClass('noscroll');
  $("#img22").addClass("showme");
});

var select_race = document.getElementById("select-update");
select_race.addEventListener("change",function(){
  document.getElementById("aboutthedata-box").classList.add("active");
  document.getElementById("aboutthedata-overlay").classList.add("active");
  $('body').addClass('noscroll');
  $("#img"+$(this).val().split("select")[1]).addClass("showme");
});

// hide the about the data box
document.getElementById("close-data-box").addEventListener("click",function() {
  document.getElementById("aboutthedata-box").classList.remove("active");
  document.getElementById("aboutthedata-overlay").classList.remove("active");
  $('body').removeClass('noscroll');
  $(".img").removeClass("showme");
});
