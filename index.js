const {
  getWorkWindows,
  getWorkhoursAvailable,
  getSchedule,
  sortByDeadline,
} = require('./utils')

const { initialDate, finalDate, batchHours, jobs } = require('./data')

console.log(
  getSchedule({
    workWindows: getWorkWindows({
      workhoursAvailable: getWorkhoursAvailable({
        firstDate: initialDate,
        secondDate: finalDate,
      }),
      batchHours,
    }),
    jobs: sortByDeadline(jobs),
  })
)
