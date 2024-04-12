function searchTransform(arr, text) {
  const objFromArr = {};
  const results = [];
  let resultsCounted = [];

  for (let i = 0; i < arr.length; i += 1) {
    const words = arr[i].text.split(' ');

    words.forEach((word) => {
      const cleanWord = word.replace('.', '');
      if (objFromArr[cleanWord] === undefined) {
        objFromArr[cleanWord] = [arr[i].id];
      } else if (!objFromArr[cleanWord].includes(arr[i].id)) {
        objFromArr[cleanWord] = [...objFromArr[cleanWord], arr[i].id];
      }
    });
  }

  const searching = text.split(' ');
  for (let i = 0; i < searching.length; i += 1) {
    results.push(...objFromArr[searching[i]]);
  }

  for (let i = 0; i < results.length; i += 1) {
    const resultItem = resultsCounted.find((item) => item.id === results[i]);

    if (resultItem === undefined) {
      const obj = { id: results[i], count: 1 };
      resultsCounted.push(obj);
    } else {
      resultsCounted = resultsCounted.map((result) => {
        if (result.id === resultItem.id) {
          return { id: result.id, count: result.count + 1 };
        }
        return result;
      });
    }
  }

  resultsCounted = resultsCounted.sort((a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  });

  return resultsCounted.map((item) => item.id);
}

export default searchTransform;
