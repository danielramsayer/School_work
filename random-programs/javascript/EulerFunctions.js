//#1 multiple of 3 and 5 combined
function threeFiveMult(end, total, count) {
  do {
    if (count % 3 == 0 || count % 5 == 0) {
      total += count;
    }
    count += 1;
  }
  while (count < end);
  return total;
}

threeFiveMult(1000, 0, 0);

//#2 Even fibonacci numbers to 4Million?
function evenFibsMult(end) {
  var total = 0, count = 0, temp1 = 1, temp2 = 0;
  while (count < end) {
    count = temp1 + temp2;
    temp2 = temp1;
    temp1 = count;
      if (count % 2 == 0) {
        total += count;
      }
  }
  return total;
}

//#3 largest Prime factor
var largestP = 0;
function largestPrime(num, div) {
  while (num > div) {
    if (num % div == 0) {
    num /= div;
    if (div > largest) {
      largestP = div;
    }
    largestPrime(num, div);
    } else {
      div += 1;
      largestPrime(num, div);
      if (div > largest) {
        largestP = div;
      }
    }
    return largestP;
  }
}
largestPrime(600851475142, 2);

//#4 largest palindrome product
function largestPalindrome(startingNum) {
  found = 0
  firstNum = startingNum;
  for (i = firstNum; i > 99; i--) {
      for (t = 999; t > 99; t--) {
        toCheckPal = i * t;
        toCheckPal1st = toCheckPal.toString().substr(0,3);
        if (checkPalindrome(toCheckPal1st) == toCheckPal) {
          if (toCheckPal > found) {
            found = toCheckPal;
            console.log(found);
          }
        }
      }
  } return found;
}

largestPalindrome(999);

function checkPalindrome(num) {
  second = num.toString().split("").reverse().join("");
  first = num.toString();
  total = first + second;
  return parseInt(total);
}

//#5 Smallest multiple evenly dividible by every number from 1 to 20
function dividible(toCheckTo) {
  for ( i = 2521; i <= 10000000; i++) {
    for (t = 1; t <= toCheckTo; t++) {
      result = i / t;
      if (Number.isInteger(result)) {
        if(t==20) {
          console.log("smallest is", i);
          break;
        }
      } else {
        break;
      }
    }
  }
}
dividible(20);


//#6 difference between sum of squares to 100 and the suared sum of 100n.
function sumsForSquares(toCheckTo) {
  sumOfSquares = 0;
  sumToSquare = 0;
  for (i=0; i <= toCheckTo; i++) {
    sumOfSquares += i*i;
    sumToSquare += i;
  }
  console.log(sumToSquare*sumToSquare - sumOfSquares);
}

//#7 10001st prime
function primeAtNum(num) {
  currentNum=0;
  currentPrime=0;
  counter=1;
  while (currentNum <= num) {
    counter += 1;
    if (isItPrime(counter)) {
      currentNum += 1;
      currentPrime = counter;
      if (currentNum == num) {
        console.log(currentNum, currentPrime)
      }
    }
  }
}

function isItPrime(num) {
  for (i=2; i < num; i++) {
    result = num / i;
    if (Number.isInteger(result)) {
      return false;
    }
  }
  return true;
}

primeAtNum(10001);
//104743

//#8 13 adjacent numbers with the greatest product
function adjacentSum(numToCheck, adjacentNums) {
  strNumToCheck = numToCheck.toString();
  sum = 0;
  for (i = 0; i <= strNumToCheck.length; i++ ) {
    slice = strNumToCheck.slice(i, i+adjacentNums);
    //console.log(slice);
    checkSum = sliceToSum(slice);
  }
}

function sliceToSum(number) {
  first = number.split("");
  sum = 1;
  for (i=0; i < first.length; i++) {
    newnum=parseInt(first[i]);
    sum *= newnum;
  }
    console.log(sum);
    return sum;
}
