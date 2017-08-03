var show = "0";
var total = "0";
var current = [];

document.getElementById('total').innerHTML = total;

function buttonPressed(numbButt) {
  switch (numbButt){
    case 'CE':
      total = 0;
      return total;
    case 'C':
      current = 0;
      show = 0;
    case "<-":
      current = current.toString().slice(0,-1);
      show = current;
    case "0":
      if (current[0] === "0") {

      }
  }
}
