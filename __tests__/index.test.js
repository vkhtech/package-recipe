/**
 * Unit tests for the index.js
 */
describe('index.js', () => {
  it('greet function returns Hello world!', () => {
    const greet = require('../src/index')

    expect(greet()).toBe('Hello world!')
  })
})