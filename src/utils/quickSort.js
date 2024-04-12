function quickSort(arr, key, direction = 'desc') {
  if (arr.length < 2) return arr;

  const left = [];
  const right = [];
  const el = arr[Math.floor(arr.length / 2)];

  for (let i = 0; i < arr.length; i += 1) {
    if (direction === 'asc') {
      if (arr[i][key] < el[key]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (arr[i][key] < el[key]) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
  }

  return [...left, ...right];
}

export default quickSort;
