const assert = require('assert'),
  { nest } = require('../index')

describe('index.js', function () {
  it('En array med 13 värden', function () {
    assert.strictEqual(nest().length, 13)
  })
})