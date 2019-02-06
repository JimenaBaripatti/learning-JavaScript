function arrayToList([a, b, c]) {
  
    let list = {
      value: a,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    }
  return list
}

console.log(arrayToList([1, 2, 3]));

function listToArray()
