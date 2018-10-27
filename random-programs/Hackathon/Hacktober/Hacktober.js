function flashlight(position){
  var x = position.clientX || position.touches[0].clientX
  var y = position.clientY || position.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',flashlight)
document.addEventListener('touchmove',flashlight)
