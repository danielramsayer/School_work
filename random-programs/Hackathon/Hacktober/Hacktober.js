function flashlight(position){
  var x = position.clientX || position.touches[0].clientX
  var y = position.clientY || position.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',flashlight)
document.addEventListener('touchmove',flashlight)

function jumpScare() {
  let size = 0;
  let angle1 = 0;
  let height1 = 0;
  let width1 = 0;
  while (angle1 < 340) {
    angle1 += 20;
    height1 += 150;
    width1 += 150;
    document.getElementById("myImg").style.transform = "rotate("+ angle1 + "deg)";
    document.getElementById("myImg").height = height1;
    document.getElementById("myImg").width = width1;
  }
  var snd = new Audio("wickedwitchlaugh.mp3");
  snd.play();
}
