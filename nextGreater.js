function nextGreater(arr) {
  if (!arr.length) {
    return [];
  }

  const result = [];
  const stack = [{ value: arr[0], idx: 0 }];
  let i = 1;

  while (i < arr.length) {
    const current = arr[i];

    if (stack.length) {
      let last = stack.pop();

      while (last && current > last.value) {
        result[last.idx] = current;

        last = stack.pop();
      }

      if (last && current <= last.value) {
        stack.push({ value: last.value, idx: last.idx });
      }

      stack.push({ value: current, idx: i });

    }

    i++; 
  }

  while (stack.length) {
    const { idx } = stack.pop();
    result[idx] = -1;
  }

  return result;
}
