function colorfulNumber(n) {
  const arr = String(n).split('');
  const products = {};
  let i = 0;

  while (i < arr.length) {
    let j = 1;

    // i is where to start, j is how long
    while (j <= arr.length - i) {
      const subsequence = arr.slice().splice(i, j);
      const product = getProduct(subsequence);

      if (products[product]) {
        return 0;
      }

      products[product] = true;
      j++;
    }

    i++;
  }

  return 1;
}

function getProduct(arr) {
  return arr.reduce((result, el) => result * parseInt(el, 10), 1);
}
