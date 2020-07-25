const sortByDeadline = (jobs) =>
  jobs.sort(
    (jobA, jobB) => Date.parse(jobA.deadline) - Date.parse(jobB.deadline)
  )

const getWorkhoursAvailable = ({ firstDate, secondDate }) => {
  const millisecondsInAnHour = 1000 * 60 * 60
  const date1 = Date.parse(firstDate)
  const date2 = Date.parse(secondDate)

  return Math.floor((date2 - date1) / millisecondsInAnHour)
}

const getWorkWindows = ({ workhoursAvailable, batchHours }) => ({
  period: batchHours,
  slots: Math.floor(workhoursAvailable / batchHours),
})

const getSchedule = ({ workWindows, jobs }) => {
  let batch = []
  let jobsYetToSchedule = [...jobs]
  let partialBatch = []
  let duration = 0

  for (let j = 0; j < workWindows.slots; j++) {
    for (let i = 0; i < jobsYetToSchedule.length; i++) {
      duration += jobsYetToSchedule[i].duration
      if (duration > workWindows.period) continue
      partialBatch.push(jobsYetToSchedule[i].id)
    }
    batch.push(partialBatch)
    jobsYetToSchedule.splice(0, partialBatch.length)
    if (jobsYetToSchedule.length === 0) break
    duration = 0
    partialBatch = []
  }

  return batch
}

module.exports = {
  sortByDeadline,
  getWorkhoursAvailable,
  getWorkWindows,
  getSchedule,
}
