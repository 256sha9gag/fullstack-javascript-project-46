import * as path from 'path';
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'node:fs';
import getDiff from '../src/getdiff.js';
import trueResult from '../__fixtures__/trueResult.js';

test('getobjs', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

  expect(trueResult).toBe(getDiff([readFile('file1.json'), readFile('file2.json')]));
});