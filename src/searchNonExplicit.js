import findWords from './utils/findWords.js';
import quickSort from './utils/quickSort.js';

function searchNonExplicit(arr, words) {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const doc = findWords(arr[i].text, words, false);

    if (doc && doc.length > 0) {
      result.push({ id: arr[i].id, count: doc.length });
    }
  }

  const sortedResults = quickSort(result, 'count');

  return sortedResults.map((doc) => doc.id);
}

export default searchNonExplicit;
