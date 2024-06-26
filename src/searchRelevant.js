// @ts-check

import quickSort from './utils/quickSort.js';
import findWords from './utils/findWords.js';

function searchRelevant(arr, text) {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const doc = findWords(arr[i].text, text, true);

    if (doc && doc.length > 0) {
      result.push({ id: arr[i].id, count: doc.length });
    }
  }

  const sortedResults = quickSort(result, 'count');

  return sortedResults.map((doc) => doc.id);
}

export default searchRelevant;
