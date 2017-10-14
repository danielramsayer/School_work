/*
Daniel Ramsayer
*/


function showPattern(){
  var top = 25, left = 25;
  var width = 300, height=300;
  var colourList = ["red","orange","yellow","green","blue","purple"];
  var the_body = document.getElementById("theBody");

  while (width > 50) {
    var thisDiv = document.createElement("div");
    var randomColour = Math.random() * 7;
    randomColour = Math.floor(randomColour);
    thisDiv.style.top = top + "px";
    thisDiv.style.left = left + "px";
    thisDiv.style.width = width + "px";
    thisDiv.style.height = height + "px";
    thisDiv.style.background = colourList(randomColour);
    theBody.appendChild(thisDiv);
    top += 15;
    left = 15;
    width -= 10;
    height -= 10;
  }
}
