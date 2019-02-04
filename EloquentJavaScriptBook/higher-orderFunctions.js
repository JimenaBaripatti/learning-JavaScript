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

arrayOfArrays
