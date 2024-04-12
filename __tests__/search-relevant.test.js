// @ts-check

import { test, expect } from '@jest/globals';
import searchRelevant from '../src/searchRelevant.js';
import docs from '../data/docs.js';

test('search relevant', () => {
  const result = searchRelevant(docs, 'shoot');
  expect(result).toStrictEqual(['doc2', 'doc1']);
});
