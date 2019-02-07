/*
Your own loop
Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
When defining the function, you can use a regular loop to do the actual
looping. 
*/

function test(current, end) {
  if (current <= end) {
    return true;
  } else {
    return false;
  }
}

function body(current) {
  console.log(current);
}

function update(current) {
  newValue = current + 1;
  return newValue;
}

function myOwnLoop(start, end) {
  while (test(start, end)) {
    body(start);
    start = update(start);


  }
}

myOwnLoop(1, 5);
