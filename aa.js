var inputArray = [];

// Use a loop to get four inputs from the user
for (var i = 0; i < 4; i++) {
  // Prompt the user to enter a number and add it to the array
  var input = prompt("Enter a number:");
  inputArray.push(Number(input));
}

// Use a loop to sort the array in ascending order
for (var i = 0; i < inputArray.length - 1; i++) {
  for (var j = i + 1; j < inputArray.length; j++) {
    if (inputArray[j] < inputArray[i]) {
      // Swap the elements at index i and j
      var temp = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = temp;
    }
  }
}

// Print the sorted array to the console
console.log("Sorted array: " + inputArray);