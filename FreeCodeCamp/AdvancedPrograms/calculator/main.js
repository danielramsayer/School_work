var current = [].join(',');
var old = [];

var firstShow = document.getElementById('total');
firstShow.innerHTML = 0;

function buttonPressed(numbButt) {
  switch (numbButt) {
    case 'CE':
      total = "0";
    case 'C':
      current = "0";
      break;
    case "back":
      current = current.toString().slice(0, -1);
      break;
    case "0":
      if (current.length < 1 && current[0] !== "0") {
        current = current.concat("0");
      }
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (current === '0') {
        current = "";
      }
      current = current.concat(numbButt);
      break;
    default:

  }
  var show = current.toString();
  firstShow.innerHTML = show;
}
