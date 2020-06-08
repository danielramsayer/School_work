//EJS Chapter 2

//Loop Triangle
function triangle(num) {
  let hashery = "";
  for (let i = 0; i <= num; i++) {
    hashery += "#";
    console.log(hashery);
  }
}

//FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

//Chess Board
function chess(n) {
  let board = "";
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if ((i + j) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  console.log(board);
}

//ESJ Chapter 3

//Minimum Function
function minimum(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else {
    return "These two numbers appear to be the same.";
  }
}

//Recursion for Even numbers
function isEven(num) {
  if (num == 0) {
    console.log(num == 0);
  } else if (num == 1) {
    console.log(num == 0);
  } else {
    isEven(num - 2);
  }
}

//Bean Counting
function countBs(string) {
  let b = "B";
  count = 0;
  for (let i = 0; i < string.length(); i++) {
    if (string[i] === b) {
      count++;
    }
  }
  return count;
}

function countChars(string, char1) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char1) {
      count++;
    }
  }
  return count;
}

//ESJ Chapter 4
//Range Function
function range(a, b) {
  let rangeArray = [];
  for (let i = a; i <= b; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}
//Sum Function
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//Array Reversal function
function reverse(input) {
  let reverseArray = [];
  for (let i = 0; i < input.length; i++) {
    reverseArray.unshift(input[i]);
  }
  console.log(reverseArray);
}

//List Function
let listNum = [1, 2, 3];
arrayToList(listNum);
function arrayToList(numArray) {
  let list = {};
  for (let i = 0; i < numArray.length; i++) {
    list.value = numArray.splice(0, 1)[0];
    list.rest = numArray.length > 0 ? arrayToList(numArray) : null;
  }
  return list;
}

let list1 = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function listToArray(list) {
  let listArray = [];
  while (list.value !== null) {
    listArray.push(list.value);
    list = list.rest;
  }
  return listArray;
}

function listToArray(listValue) {
  var arrayFromList = [];

  for (let i = listValue; i; i = i.rest) {
    if (`value` in i) {
      arrayFromList.push(i.value);
    }
  }
  return arrayFromList;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

function nth(list, num) {
  return listToArray(list)[num];
}

function nRecursive(list, num) {
  if (list) {
    if (n == 0) {
      console.log(list.value);
    } else {
      console.log(list.rest, num - 1);
    }
  }
}

let obj1 = { value: { color: "grey", hue: 4 }, element: "Green" };
let obj2 = { value: "blue", element: "Hornet" };

//Deep Comparison
function deepEqual(ob1, ob2) {
  //if either of them is null, both fail
  if (ob1 === null || ob2 === null) {
    return false;
  }
  //if they're the same, early catch
  if (ob1 === ob2) {
    return true;
  }
  //null caught, if both are objects, continue
  if (typeof ob1 === "object" && typeof ob2 === "object") {
    //if the keys aren't the same length, different
    if (Object.keys(ob1).length !== Object.keys(ob2).length) {
      return false;
    }
    //recursion part, checking that the internal properties
    for (let i in ob1) {
      //are all true
      if (ob2.hasOwnProperty(i)) {
        //else false
        if (!deepEqual(ob1[i], ob2[i])) {
          return false;
        }
      } else {
        return false;
      }
    }
    //looks good
    return true;
  } else {
    //does not look the same
    return false;
  }
}

//ESJ Chapter 5

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//Flattening
function flatten(array) {
  const flat = array.reduce((acc, cur) => acc.concat(cur), []);
  console.log(flat);
}

//Call your own loop
function ownLoop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

ownLoop(10, j => j > 0, j => j - 1, console.log);

let arr1 = [11, 12, 3, 14];

//Everything?
function every0(thing, pred) {
  let all = true;
  for (let i = 0; i < thing.length; i++) {
    //if pred function ever returns false, all is lost
    if (!pred(thing[i])) {
      all = false;
    }
  }
  return all;
}

every0(arr1, j => j > 10);

function every1(thing, pred) {
  let all = true;
  //I'm looking to see if there are things below 10 to ixnay this.
  if (thing.some(pred)) {
    all = false;
  }
  return all;
}

every1(arr1, j => j < 10);

//Dominant Writing Direction can be applied here: https://eloquentjavascript.net/code/#5.4

function dominantDirection(text) {
  //console.log(textScripts(text));
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (scripts.length === 0) {
    return "dominant direction not found";
  } else if (scripts.length === 1) {
    return scripts[0].name;
  } else {
    if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
      return "dominant direction not found";
    } else {
      return scripts.reduce((acc, cur) =>
        acc.count >= cur.count ? acc.name : cur.name
      );
    }
  }
}

//ESJ Chapter 6

//Vector Type
function Vec(x, y) {
  this.x = x;
  this.y = y;
}

//creating new prototypes methods
Vec.prototype.plus = function(vector) {
  return new Vec(this.x + vector.x, this.y + vector.y);
};

Vec.prototype.minus = function(vector) {
  return new Vec(this.x - vector.x, this.y - vector.y);
};

Object.defineProperty(Vec.prototype, "length", {
  //https://tinyurl.com/ycaznvek
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});

//Groups
class Group {
  constructor() {
    this.groupMember = [];
  }
  add(x) {
    if (!this.has(x)) {
      this.groupMember.push(x);
    }
  }
  delete(x) {
    if (this.has(x)) {
      let location = this.groupMember.indexOf(x);
      this.groupMember.splice(location, 1);
    }
  }
  has(x) {
    return this.groupMember.includes(x);
  }
  static from(iterable) {
    let newGroup = new Group();
    for (let i of iterable) {
      newGroup.add(i);
    }
    return newGroup;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.groupMember); //[10,20]
console.log(group.has(30)); // → false
group.add(30);
group.delete(10);
console.log(group.has(10)); // → false
console.log(group.groupMember); //[20,30]
console.log(group.has(30)); // → true

//Iterable group
//pg 109 & https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next
class GroupIt {
  constructor(members) {
    this.members = members;
    this.position = 0;
  }
  next() {
    if (this.position == this.member.length) {
      return { done: true };
    }
    let current = this.member[this.position];
    this.position = this.postion++;
    return { current, done: false };
  }
}

let group = new GroupIt([10, 20]);

let tGroup = new GroupIterator("a", "b", "c");
console.log(tGroup);

//Borrowing Method
function borrow() {
  let obj = { one: true, two: true, hasOwnProperty: true };
  console.log(Object.prototype.hasOwnProperty.call(obj, "one"));
}

console.log(borrow());

//ESJ Chapter 7

//Measuring a Robot
//Dependent on functions from book, using their testing environment so that I don't have to copy paste 300 lines.
//https://eloquentjavascript.net/code/#7.1
function runMeasureRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      //console.log(`Done in ${turn} turns`);
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    //console.log(`Moved to ${action.direction}`);
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let steps = 100;
  turns1 = 0;
  turns2 = 0;
  for (let i = 0; i < steps; i++) {
    let currentState = VillageState.random();
    turns1 += runMeasureRobot(currentState, robot1, memory1);
    turns2 += runMeasureRobot(currentState, robot2, memory2);
  }
  console.log(`Average for robot1 ${turns1 / steps}`);
  console.log(`Average for robot2 ${turns2 / steps}`);
}

//Robot Efficiency
//based on goal oriented robot (pg126)
//https://eloquentjavascript.net/code/#7.2
function efficientRobot({ place, parcels }, route) {
  if (route.length == 0) {
    //Instead of going around all the places to pick them up, only go to the places that have packages
    let pickups = parcels.filter(i => i.place != place).map(i => i.place);
    //Same, but for deliveries
    let deliveries = parcels.filter(i => i.place == place).map(i => i.address);
    //Shift from one array to the next
    let residences = pickups.length > 0 ? pickups : deliveries;
    //Compare the members of residences and let findRoute
    let shortest;
    for (let residence of residences) {
      let option = findRoute(roadGraph, place, residence);
      if (!shortest || shortest.length > option.length) {
        shortest = option;
      }
    }
    route = shortest;
  }
  return { direction: route[0], memory: route.slice(1) };
}

runRobotAnimation(VillageState.random(), efficientRobot, []);

//Persistant Group
//https://eloquentjavascript.net/code/#7.3
class PGroup {
  constructor(groupMember) {
    this.groupMember = groupMember || [];
  }
  add(x) {
    if (!this.has(x)) {
      return new PGroup(this.groupMember.concat(x));
    } else {
      return this;
    }
  }
  delete(x) {
    if (this.has(x)) {
      return new PGroup(this.groupMember.filter(i => i != x));
    } else {
      return this;
    }
  }
  has(x) {
    return this.groupMember.includes(x);
  }
}

PGroup.empty = new PGroup();
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false

//ESJ Chapter 8
//Retry
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Did not meet 20% threshold.");
  }
}

function PersistantMultiply(a, b) {
  let answer;
  for (;;) {
    try {
      answer = primitiveMultiply(a, b);
      break;
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
  return answer;
}

console.log(reliableMultiply(8, 8));
// → 64
console.log(reliableMultiply(21, 37));
// → 777

//Locked Box
const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  if (!box.locked) {
    return body();
  }
  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true

//ESJ Chapter 9
//Or Daniel and how I learned to hate RegEx

//                 /abc/ A sequence of characters
//                 /[abc]/ Any character from a set of characters
//                 /[^abc]/ Any character not in a set of characters
//                 /[0-9]/ Any character in a range of characters
//                 /x+/ One or more occurrences of the pattern x
//                 /x+?/ One or more occurrences, nongreedy
//                 /x*/ Zero or more occurrences
//                 /x?/ Zero or one occurrence
//                 /x{2,4}/ Two to four occurrences
//                 /(abc)/ A group
//                 /(a|b|c)/ Any one of several patterns
//                 /\d/ Any digit character
//                 /\w/ An alphanumeric character (“word character”)
//                 /\s/ Any whitespace character
//                 /./ Any character except newlines
//                 /\b/ A word boundary
//                 /^/ Start of input
//                 /$/ End of input

//Regex Golf
//car and cat
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

//pop and prop
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

//ferret, ferry, and ferrari
verify(
  /ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

//Any word ending in ious
verify(
  /ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

//A whitespace character followed by a period, comma, colon, or semicolon
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);

//A word longer than six letters
verify(/\w{7,}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

//A word without the letter e (or E)
verify(
  /\b[^eE\W]+\b/,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}

//Quoting style
let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."

//Numbers Again
// Fill in this regular expression.
let number = /^[+-]?(\d|\.\d|\d+\.\d*)([e][+-]?)?\d*$/i;

// Tests:
for (let str of [
  "1",
  "-1",
  "+15",
  "1.55",
  ".5",
  "5.",
  "1.3e2",
  "1E-4",
  "1e+12"
]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
