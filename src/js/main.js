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

  $("progress").attr('value', position);

});

