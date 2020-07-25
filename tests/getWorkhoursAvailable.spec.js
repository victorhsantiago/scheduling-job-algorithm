const { getWorkhoursAvailable } = require('../utils')

test('get workhours avaiable', () => {
  expect(
    getWorkhoursAvailable({
      firstDate: '2020-08-01 09:00:00',
      secondDate: '2020-08-03 09:00:00',
    })
  ).toBe(48)
})
