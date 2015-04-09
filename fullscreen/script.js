window.addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'Full Screen Background';
}, false);

var pics = document.getElementById("allpictures");


var pos = 0;
var next = document.getElementById("next");

next.onclick = function(){
if(pos > -300){
  pos -= 100;
  pics.style.left = pos +"vw";
}
}

var back = document.getElementById("back");

back.onclick = function(){
if (pos < 0){
  pos += 100;
  pics.style.left = pos +"vw";
}
}



