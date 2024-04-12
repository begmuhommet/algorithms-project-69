// @ts-check

import { expect, test } from '@jest/globals';
import docs from '../data/docs.js';
import searchTransform from '../src/searchTransform.js';

test('search transform', () => {
  const result = searchTransform(docs, 'shoot at me');
  expect(result).toStrictEqual(['doc2', 'doc1']);
});
