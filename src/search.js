// @ts-check

function search(arr, text) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const doc = arr[i].text.split(' ');
    if (doc.includes(text)) {
      result.push(arr[i].id);
    }
  }

  return result;
}

export default search;
