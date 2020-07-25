const { getSchedule } = require('../utils')

const workWindows = require('./mock/workWindows.json')
const jobs = require('./mock/sortedJobs.json')

test('get jobs schedule', () => {
  expect(getSchedule({ workWindows, jobs })).toEqual([[3], [2], [1]])
})
