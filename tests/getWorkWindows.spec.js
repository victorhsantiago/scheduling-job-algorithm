const { getWorkWindows } = require('../utils')

test('get work windows', () => {
  expect(getWorkWindows({ workhoursAvailable: 24, batchHours: 4 })).toEqual({
    period: 4,
    slots: 6,
  })
})
