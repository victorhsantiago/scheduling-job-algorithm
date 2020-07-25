const { sortByDeadline } = require('../utils')

const jobs = require('./mock/jobs.json')
const sortedJobs = require('./mock/sortedJobs.json')

test('sort jobs by deadline', () => {
  expect(sortByDeadline(jobs)).toEqual(sortedJobs)
})
