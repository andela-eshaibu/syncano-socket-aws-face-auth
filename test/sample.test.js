import { expect, assert } from 'chai';
import {run} from 'syncano-test';

const obj = { a: 24 };

describe('check obj', () => {
  it('obj should not be empty', () => {
    expect(Object.keys(obj).length > 0).to.equal(true);
    assert.propertyVal(obj, 'a', 24);
  });
});
