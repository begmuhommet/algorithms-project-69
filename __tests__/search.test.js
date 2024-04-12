// @ts-check

import { test, expect } from '@jest/globals';
import search from '../src/search.js';
import docs from '../data/docs.js';

test('search', () => {
  const result = search(docs, 'shoot');
  expect(result).toStrictEqual(['doc1', 'doc2']);
});
