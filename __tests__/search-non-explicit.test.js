// @ts-check

import { expect, test } from '@jest/globals';
import docs from '../data/docs.js';
import searchNonExplicit from '../src/searchNonExplicit.js';

test('search relevant', () => {
  const result = searchNonExplicit(docs, 'shoot at me');
  expect(result).toStrictEqual(['doc2', 'doc1']);
});
