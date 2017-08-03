var current = [].join(',');
var old = [];

var firstShow = document.getElementById('total');
firstShow.innerHTML = 0;

function buttonPressed(numbButt) {
  switch (numbButt) {
    case 'CE':
      current = "0";
    case 'C':
      current = "0";
      break;
    case "back":
      current = current.toString().slice(0, -1);
      break;
    case "0":
      if ((current[0] !== '0') || (current[0] === '0' && current[1] === '.')) {
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
      break;
    case ".":
      if (current.includes('.') === false) {
        current = current.concat(numbButt);
      }
      break;
    case "times":
      old = old.concat(current, '*');
      current = [].join(',');
      console.log(old);
      break;
    case "divide":
      old = old.concat(current, '/');
      current = [].join(',');
      console.log(old);
      break;
    case "minus":
      old = old.concat(current, '-');
      current = [].join(',');
      console.log(old);
      break;
    case "plus":
      old = old.concat(current, '+');
      current = [].join(',');
      console.log(old);
      break;
    case "equals":
      old = old.concat(current);
      total = old.join(' ');
      total = eval(total);
      old = [];
      current = [];
      current = total.toString();
      console.log(total);
  break;
  default:
}
var show = current.toString();
firstShow.innerHTML = show;
}
