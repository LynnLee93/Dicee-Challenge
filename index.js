

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomPictureSource1 = "images/dice"+ randomNumber1 +".png"
//cos dice pics named in a handily name, so we can easily using concatenation to add up the source value
document.querySelector("img.img1").setAttribute("src", randomPictureSource1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomPictureSource2 = "images/dice"+ randomNumber2 +".png"
document.querySelector("img.img2").setAttribute("src", randomPictureSource2 );

if (randomPictureSource1 > randomPictureSource2) {
  document.querySelector("h1").innerHTML = "🎊 Player 1 Wins! 🎊";
}
else if (randomPictureSource2 > randomPictureSource1) {
  document.querySelector("h1").innerHTML = "🎊 Player 2 Wins! 🎊";
}
else {
  document.querySelector("h1").innerHTML = "🎊 Draw! 🎊";
}
