function longestConsecutive(arr) {
  const map = arr.reduce((result, el) => {
    Object.assign(result, {
      [el]: 0,
    });

    return result;
  }, {});
  let maxLength = 0;

  arr.forEach((el) => {
    let length = 1;

    if (map[el] === 0) {
      let next = el + 1;
      let prev = el - 1;

      while (typeof map[next] !== 'undefined') {
        length++;
        map[next] = 1;
        next++;
      }

      while (typeof map[prev] !== 'undefined') {
        length++;
        map[prev] = 1;
        prev--;
      }
    }

    maxLength = Math.max(maxLength, length);
  });

  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));