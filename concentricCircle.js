function concentricCircle(A) {
  if (A < 1) {
    throw new Error('Invalid input');
  }
  
  if (A === 1) {
    return [[1]];
  }
  
  const prev = concentricCircle(A - 1);
  const prevN = prev[0].length;
  const newRow = (new Array(prevN + 2)).fill(A);

  return [
    newRow,
    ...(prev.map(prevRow => [A, ...prevRow, A])),
    newRow,
  ];
}
