function id() {
  return "UP000000";
}

function multiples(numsToCheck) {
  let finalSum = 0;
  for (var i = 0; i < numsToCheck; i++) {
    if (i % 5 === 0) {
      finalSum += i;
    }
    else if (i % 3 === 0) {
      finalSum += i;
    }
  }
  return finalSum;
}

/*
function betterMultiples(limit, mulArray) {
  let finalSum = 0;
  let first
  if (mulArray) {

    }
  }
}
*/
function sumOfCharacters(stringToCheck) {
  let finalSum = 0;
  for (var i = 0; i < stringToCheck.length; i++) {
    let letter = stringToCheck.charCodeAt(i);
    finalSum += letter;
  }
  return finalSum;
}

function sentenceWordSums(stringToCheck){
  if (stringToCheck) {
    let wordNumArray = [];
    stringToCheck = stringToCheck.replace(/\s+/g, ' ');
    let arrayToCheck = stringToCheck.split(" ");
    for (var i = 0; i < arrayToCheck.length; i++) {
      let x = sumOfCharacters(arrayToCheck[i]);
      wordNumArray.push(x);
    }
    return wordNumArray;
  }
  else {
    return [];
  }
}

function sumOfSentence(stringToCheck, lengthlimit){
  if (stringToCheck) {
    let finalSum = 0;
    stringToCheck = stringToCheck.replace(/\s+/g, ' ');
    let arrayToCheck = stringToCheck.split(" ");
    for (var i = 0; i < arrayToCheck.length; i++) {
      if (lengthlimit) {
	      if (arrayToCheck[i].length >= lengthlimit) {
  	      let x = sumOfCharacters(arrayToCheck[i]);
    	    finalSum += x;
     	 	}
      }
      else {
        let x = sumOfCharacters(arrayToCheck[i]);
    	  finalSum += x;
      }
    }
    return finalSum;
  } else {
    return [];
  }
}

function palindrome(stringToCheck, boolToCheck){
 	if (stringToCheck) {
    stringToCheck = stringToCheck.toLowerCase();
    if (boolToCheck === true) {
      stringToCheck = stringToCheck.replace(/\s/g,'');
      if (stringToCheck == stringToCheck.split('').reverse().join('')) {
        return true;
      }
      else {
        return false;
      }
    } else {
      if (stringToCheck == stringToCheck.split('').reverse().join('')) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  else {
    return false;
  }
}

/*
function emojify(selector){

}
™️, ❤️, 😀,
function TreeEmojify(selector){

}

function spanner(selector, prefixString){

}

function clickAttacher(selector, className){

}

function linkedDrawing(canvas, url) {

}

*/
