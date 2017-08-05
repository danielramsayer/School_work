var current = [].join(',');
var old = [];

var firstShow = document.getElementById('total');
firstShow.innerHTML = 0;

function buttonPressed(numbButt) {
  switch (numbButt) {
    case 'CE':
      current = "0";
      break;
    case 'C':
      current = "0";
      break;
    case "back":
      current = current.toString().slice(0, -1);
      break;
    case "0":
      if (current[0] === '0' && current[1] === '.' || current[0] !== '0') {
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
      current = current.concat(numbButt);
      if (current[0] === '0' && current[1] !== '.') {
        var shifted = current.shift();
      }
      break;
    case ".":
      if (current.includes('.') === false) {
        current = current.concat(numbButt);
      }
      break;
    case "times":
      old = old.concat(current, '*');
      current = [].join(',');
      var show = current[-1].toString();
      firstShow.innerHTML = show;
      break;
    case "divide":
      old = old.concat(current, '/');
      current = [].join(',');
      var show = current[-1].toString();
      firstShow.innerHTML = show;
      break;
    case "minus":
      old = old.concat(current, '-');
      current = [].join(',');
      var show = current[-1].toString();
      firstShow.innerHTML = show;
      break;
    case "plus":
      old = old.concat(current, '+');
      current = [].join(',');
      var show = current[-1].toString();
      firstShow.innerHTML = show;
      break;
    case "equals":
      old = old.concat(current);
      total = old.join(' ');
      total = eval(total);
      old = [];
      current = [];
      current = total.toString();
  break;
  default:
}
var show = current.toString();
firstShow.innerHTML = show;
}
