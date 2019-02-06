// The sum of a range
function range(a, b, step) {
  let range = [];
  if (step == null) {
    step = 1;
  } else if (step < 0) {
    for (let counter = a; counter >= b; counter = counter + step) {
    range.push(counter);
    }
    } 

    for (let counter = a; counter <= b; counter = counter + step)
    
    range.push(counter);
  
  return range;
}

function sum(array) {
  let sum = 0;
  for (let number of array) {
    sum = sum + number;

  }
  return sum;
}
//console.log(sum(range(1, 10)));
//console.log(range(1, 10, 2));
//console.log(range(5, 2, -1));

// Reversing an array
function reverseArray(array) {
  let reverseArray = [];
  for (let item of array) {
    reverseArray.unshift(item);
  }
  return reverseArray;
}
let test = [1, 2, 3];
console.log("----- create a new reversed array ----")
console.log(reverseArray(test));
console.log(test);

function reverseArrayInPlace(array) {
  let temp = [];
  
    for (let item of array) {
    temp.unshift(item);
    
    }
    for (let item of temp) {
      array.push(item);
      array.shift();
    }
  
  return array;
}
console.log("----- reverse in place ----")
console.log(reverseArrayInPlace(test));
console.log(test);
