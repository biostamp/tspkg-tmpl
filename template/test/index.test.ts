import * as root from '../src/index'

describe('test should run', () => {
  it('should return 2', () => {
    expect(root.sum(1, 1)).toBe(2)
  })
})
