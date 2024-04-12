function findWords(arr, words, explicit) {
  const searching = explicit ? words : words.replaceAll(' ', '|');
  const regex = new RegExp(`\\b(${searching})\\b`, 'g');
  const result = arr.match(regex);
  return result;
}

export default findWords;
