function id() {
  return "UP877515";
}

function multiples(numsToCheck) {
  //this accrues the count
  let finalSum = 0;
  //checks the larger number first, the reason for this is fizzBuzz logic.
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

function betterMultiples(limit, mulArray) {
  //accrues the counted
  let finalSum = 0;
  //because arrays are variable in this, this is where the final to check will reside.
  let arraything = []
  //because we're going higher with this one, we're keeping track of duplicates
	let last = 0;

  //Set Array to use.
  if (mulArray) {
    arraything = mulArray;
  } else {
    arraything = [3,5]
  }

  //iterate through count up
  for (var i = 0; i < limit; i++){
    //iterate through array of checking numbers
    for (var j = 0; j < arraything.length; j++){
      //checks if numbers divisible
      if (i % arraything[j] === 0) {
        //if it hasn't been counted yet, add to final count.
        if (last != i) {
	        finalSum += i;
          last = i;
        }
      }
    }
  }
  return finalSum;
}

function sumOfCharacters(stringToCheck) {
  let finalSum = 0;
  //Break down chars to their ascii number, then add them
  for (var i = 0; i < stringToCheck.length; i++) {
    let letter = stringToCheck.charCodeAt(i);
    finalSum += letter;
  }
  return finalSum;
}

function sentenceWordSums(stringToCheck){
  //so long as there are letters to check
  if (stringToCheck) {
    let wordNumArray = [];
    //convert with regex to remove large spaces.
    stringToCheck = stringToCheck.replace(/\s+/g, ' ');
    //split words out
    let arrayToCheck = stringToCheck.split(" ");
    //use above function to count letters values
    for (var i = 0; i < arrayToCheck.length; i++) {
      let x = sumOfCharacters(arrayToCheck[i]);
      wordNumArray.push(x);
    }
    return wordNumArray;
  }
  //if nothing, return empty array
  else {
    return [];
  }
}

function sumOfSentence(stringToCheck, lengthlimit){
  //if it exists
  if (stringToCheck) {
    let finalSum = 0;
    //remove extra white spaces
    stringToCheck = stringToCheck.replace(/\s+/g, ' ');
    //split into words
    let arrayToCheck = stringToCheck.split(" ");
    for (var i = 0; i < arrayToCheck.length; i++) {
      //check length of words
      if (lengthlimit) {
        //if greater than limit, continue counting
	      if (arrayToCheck[i].length >= lengthlimit) {
  	      let x = sumOfCharacters(arrayToCheck[i]);
    	    finalSum += x;
     	 	}
      }
      //if not, don't count
      else {
        let x = sumOfCharacters(arrayToCheck[i]);
    	  finalSum += x;
      }
    }
    return finalSum;
    //nothing there? blank it
  } else {
    return [];
  }
}

function palindrome(stringToCheck, boolToCheck){
  //if exists
 	if (stringToCheck) {
    //lower the case
    stringToCheck = stringToCheck.toLowerCase();
    //if the check returns true, remove white spaces from string with regex
    if (boolToCheck === true) {
      stringToCheck = stringToCheck.replace(/\s/g,'');
      //check if the same forwards and back
      if (stringToCheck == stringToCheck.split('').reverse().join('')) {
        return true;
      }
      else {
        return false;
      }
    } else {
      //check if the same forwards and back
      if (stringToCheck == stringToCheck.split('').reverse().join('')) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  //if it doesn't exist return false
  else {
    return false;
  }
}

function emojify(selector){
  //if the selected includes any of the terms, return the picture.
	if (selector.includes('(TM)') || (selector.includes('<3')) || (selector.includes(':-)'))) {
    selector = selector.replace(/\(TM\)/g, "™️");
    selector = selector.replace(/&lt;/g, '<');
    selector = selector.replace(/<3/g, "❤️");
    selector = selector.replace(/:-\)/g, "😀");
  }
  return selector;
}

function pageEmojify(selector){
  //clean up this selector
  selector = selector.replace('#', '');
  //find the document element, and strip of unnecessary html
  let text = document.getElementById(selector).innerHTML;
  //conversion heart issue cleared up
  text = text.replace(/&lt;/g, '<');
  //call emojify on the text pieces
  text = emojify(text);
  //place back in doc
  document.getElementById(selector).innerHTML = text;
}

function treeEmojify (selector) {
  //This takes the whole selector statement, runs emojify on it
  selector = selector.replace('#', '');
  let childrens = document.getElementById(selector).innerHTML;
  text = emojify(childrens);
  //and puts it back that way.
  document.getElementById(selector).innerHTML = text;
}

function spanner(selector, prefixString){
  //clean up element name
  selector = selector.replace('#', '');
  let finishedSpan = "";
  //find element
  let text = document.getElementById(selector).innerHTML;
  //split it into words
  let wordsToSpan = text.split(" ");
  for (var i = 0; i < wordsToSpan.length; i++) {
    //add span with number and prefix to it
    finishedSpan += " <span id=" + prefixString + i +">" + wordsToSpan[i] + "</span>";
  }
  //push back on the page
  document.getElementById(selector).innerHTML = finishedSpan;

}

function clickAttacher(selector, claName){
  //This is meant to clean up the selector
  selector = selector.replace(/[^\w\s]/gi, '');
  //Read in the document from the html
  let text = document.getElementById(selector);
  //to read in each childrens node and them apply a new class feature to it
  for (var i = 0; i < text.childNodes.length; i++) {
    childrens += text.childNodes[i];
  }


}

function linkedDrawing(canvas, url) {
  //I was unable to get the JSON file to properly load
*/
}
