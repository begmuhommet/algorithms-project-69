// @ts-check

function findWord(text, word) {
  const regex = new RegExp(`\\b(${word})\\b`, 'g');
  return text.match(regex);
}

function quickSort(arr, key) {
  if (arr.length < 2) return arr;

  const left = [];
  const right = [];
  const el = arr[Math.floor(arr.length / 2)];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][key] < el[key]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...left, ...right];
}

function searchRelevant(arr, text) {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const doc = findWord(arr[i].text, text);

    if (doc && doc.length > 0) {
      result.push({ id: arr[i].id, count: doc.length });
    }
  }

  const sortedResults = quickSort(result, 'count');

  return sortedResults.map((doc) => doc.id);
}

export default searchRelevant;
