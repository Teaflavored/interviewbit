function numRange(arr, range) {
  const [low, high] = range;
  let numberOfSolutions = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (left < arr.length) {
    sum += arr[right];

    if (sum <= high && sum >= low) {
      numberOfSolutions++;
      right++;
    } else if (sum < low) {
      right++;
    } else if (sum > high) {
      left++;
      right = left;
      sum = 0;
    }

    if (right === arr.length) {
      left++;
      right = left;
      sum = 0;
    }
  }

  return numberOfSolutions;
}

// console.log(numRange([1], [0, 0]));
// console.log(numRange([10, 5, 1, 0, 2], [6, 8]));
// console.log(numRange([10, 10, 10], [1, 2]));
// console.log(numRange([1, 2, 3, 4, 5], [0, 100]));
console.log(numRange([ 80, 97, 78, 45, 23, 38, 38, 93, 83, 16, 91, 69, 18, 82, 60, 50, 61, 70, 15, 6, 52, 90 ], [99, 269]));
console.log(numRange([ 94, 21, 6, 30, 70, 57, 78, 27, 18, 41, 36, 15, 95, 24, 2, 55, 25, 48 ], [46, 369]));
