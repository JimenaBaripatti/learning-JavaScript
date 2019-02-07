/*Flattening
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.

*/

// ------ create the array ------
function range(start, end) {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
  //recursive case
}

function createArray(n) {
  array = [];

  for (let i = 0; i < n; i = i + 3) {
    
    array.push(range(i, (i + 2)));

  }
  return array;
}
let arrayOfArrays = createArray(9);

//------ concat function------

function getConcat(result, item) {
  return result.concat(item);
}

console.log(arrayOfArrays);

console.log(arrayOfArrays.reduce(getConcat));
