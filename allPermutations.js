function allPermutations(arr) {
  const sortedArray = arr.sort();

  return permuteHelper(sortedArray, 0, []);
}

function hasDuplicates(arr, start, end) {
  let i = start;

  while (i < end) {
    if (arr[i] === arr[end]) {
      return false;
    }

    i++;
  }

  return true;
}

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function permuteHelper(arr, index, results) {
  if (index === arr.length) {
    results.push(arr);
  }

  let i = index;
  while (i < arr.length) {
    if (hasDuplicates(arr, index, i)) {
      swap(arr, index, i);
      permuteHelper(arr.slice(), index + 1, results);
      swap(arr, index, i);
    }

    i++;
  }

  return results;
}

console.log(allPermutations([1, 1, 2]));
