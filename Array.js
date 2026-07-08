// Question1

// Correct the syntax error:
// [1, 7, 9, 45]
// [("Str", "alex", "moh")]
// [("the", "fox", "over", "lazy", "dog")];

// Question2

// What the index of "Banana","Tomato"
var fruits = ["Tomato", "Banana", "Watermelon"];
// Banana : index 1
//Tomato : Index 0

// Question3

// Create an array represents your
let Food = ["pasta", "salad", "Kabseh", "Burger", "Toast"];
let Sport = ["Basket ball", "Running", "Swimming"];
let Movie = ["movie1", "movie2", "movie3"];

// Question4
function firstOfArray(arr) {
  return arr[0];
}
console.log(firstOfArray([1, 4, 5]));
console.log(firstOfArray(["t", "u", "g", "x"]));

// Question5
function lastOfArray(arr) {
  return arr[arr.length - 1];
}
console.log(lastOfArray([1, 4, 5]));
console.log(lastOfArray(["t", "u", "g", "x"]));

// Question6

var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();

array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(2);
array.unshift(1);
array.push(10);

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Question7
var array2 = [5, 9, -7, 3.5];
// push: to add new elemet at the end
//unshift:to addd new element at the begining
//shift: to delete the first element
//pop: to delete the last element

// Question8
function middleOfArray(arr) {
  if (arr.length % 2 != 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    let mid = arr[Math.floor(arr.length / 2)];
    // let mid2 =
    return `${mid} ${arr[Math.floor(arr.length / 2) - 1]}`;
  }
}
console.log(middleOfArray([1, 4, 5]));
console.log(middleOfArray(["t", "u", "g", "x"]));

// Question 9
var animals = ["cat", "ele", "bird"];
animals[0] = "zebra";
animals[1] = "elephant";
animals.pop();
console.log(animals);

var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums);

// Question10

function indexOfArray(arr, i) {
  return arr[i];
}
var nums = [1, 2, 3, 8, 9];
console.log(indexOfArray(nums, 3));
console.log(indexOfArray(nums, 1));
console.log(indexOfArray(nums, 4));

// Question11
function arrayExceptLast(arr) {
  arr.pop();
  return arr;
}
var nums = [1, 2, 3, 8, 9];
console.log(arrayExceptLast(nums));

// Question12
function addToEnd(arr, v) {
  arr.pop();
  arr.push(v);
  return arr;
}
var nums = [1, 2, 3, 8, 9];
console.log(addToEnd(nums, 55));

// Question13

function sumArraywhile(arr) {
  let sum = 0;
  let index = 0;
  while (index < arr.length) {
    sum += arr[index];
    index++;
  }
  return sum;
}

var nums = [1, 2, 3, 8, 9];
console.log(sumArraywhile(nums));

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
var nums = [1, 2, 3, 8, 9];
console.log(sumArray(nums));

// Question14
function minInArray(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
var nums = [1, 2, 3, 8, 9];
console.log(minInArray(nums));

function minInArrayWhile(arr) {
  let min = arr[0];
  let index = 1;
  while (index < arr.length) {
    if (arr[index] < min) min = arr[index];
    index++;
  }
  return min;
}

var nums = [1, 2, 3, 8, 9];
console.log(minInArrayWhile(nums));

// Question15
function removeFromArray(arr, e) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != e) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
nums = [1, 2, 3, 8, 9];
console.log(removeFromArray(nums, 8));

function removeFromArrayWhile(arr, ele) {
  let newarr = [];
  let index = 0;
  while (index < arr.length) {
    if (arr[index] != ele) newarr.push(arr[index]);
    index++;
  }
  return newarr;
}
var nums = [1, 2, 3, 8, 9];
console.log(removeFromArrayWhile(nums, 8));

// Question16
function oddArray(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
}
var nums = [1, 2, 3, 8, 9];
console.log(oddArray(nums));

function oddArrayWhile(arr) {
  let oddarr = [];
  let index = 0;
  while (index < arr.length) {
    if (arr[index] % 2 != 0) oddarr.push(arr[index]);
    index++;
  }
  return oddarr;
}
var nums = [1, 2, 3, 8, 9];
console.log(oddArrayWhile(nums));

// Question17

function aveArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
nums = [1, 2, 3, 8, 9];
console.log(aveArray(nums));

var nums2 = [1, 2, 3, 8, 9, 77];
console.log(aveArray(nums2));

function aveArrayWhile(arr) {
  let sum = 0;
  let index = 0;
  while (index < arr.length) {
    sum += arr[index];
    index++;
  }
  return sum / arr.length;
}
var nums = [1, 2, 3, 8, 9];
console.log(aveArrayWhile(nums));
var nums2 = [1, 2, 3, 8, 9, 77];
console.log(aveArrayWhile(nums2));

// Question18
function shorterInArray(arr) {
  let short = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < short) {
      short = arr[i];
    }
  }
  return short;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArray(strings));

function shorterInArrayWhile(arr) {
  let short = arr[0];
  let index = 1;
  while (index < arr.length) {
    if (arr[index].length < short.length) short = arr[index];
    index++;
  }
  return short;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArrayWhile(strings));

// Question19
function repeatChar(str, ch) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ch) {
      counter++;
    }
  }
  return counter;
}
var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string, "a"));
console.log(repeatChar(string, "z"));

function repeatCharwhile(str, ch) {
  let counter = 0;
  let index = 0;
  while (index < str.length) {
    if (str[index] == ch) counter++;
    index++;
  }
  return counter;
}

var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatCharwhile(string, "a"));
console.log(repeatCharwhile(string, "z"));

// Question 20
function evenIndexOddLength(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i].length % 2 != 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));

function evenIndexOddLengthWhile(arr) {
  let newarr = [];
  let index = 0;
  while (index < arr.length) {
    if (arr[index].length % 2 != 0) {
      newarr.push(arr[index]);
    }
    index += 2;
  }
  return newarr;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLengthWhile(strings));

// Question 21
function powerElementIndex(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.pow(arr[i], i));
  }
  return newArr;
}
var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));
function powerElementIndexWhile(arr) {
  let newarr = [];
  let index = 0;
  while (index < arr.length) {
    newarr.push(Math.pow(arr[index], index));
    index++;
  }
  return newarr;
}
var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndexWhile(nums));

// Question 22
function evenNumberEvenIndex(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 == 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(nums));

function evenNumberEvenIndexWhile(arr) {
  let newarr = [];
  let index = 0;
  while (index < arr.length) {
    if (arr[index] % 2 == 0) {
      newarr.push(arr[index]);
    }
    index += 2;
  }
  return newarr;
}
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndexWhile(nums));
