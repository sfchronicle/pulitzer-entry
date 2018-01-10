require("./lib/social"); //Do not delete

// document.addEventListener('DOMContentLoaded',function(event){

  console.log("HERE");
  // array with texts to type in typewriter
  var dataText = [];
  console.log(entry_text.length);
  for (var idx=0; idx<entry_text.length; idx++){
    dataText.push("<div>"+entry_text[idx].Time+"</div><div>"+entry_text[idx].Title+"</div><div>"+entry_text[idx].Post+"</div>");
  }
  // var dataText = [ "<div>"+entry_text[0].Time+"</div><div>"+entry_text[0].Title+"</div>", entry_text[1].Title, entry_text[2].Title];
  console.log(dataText)

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("#typewriter-text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
// });
