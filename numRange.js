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
