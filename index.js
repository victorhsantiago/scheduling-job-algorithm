const initialDate = '2019-11-10 09:00:00'
const finalDate = '2019-11-11 12:00:00'
const batchHours = 8

const jobs = [
  {
    id: 1,
    description: 'Importação de arquivos de fundos',
    deadline: '2019-11-10 12:00:00',
    duration: 2,
  },
  {
    id: 2,
    description: 'Importação de dados da Base Legada',
    deadline: '2019-11-11 12:00:00',
    duration: 4,
  },
  {
    id: 3,
    description: 'Importação de dados de integração',
    deadline: '2019-11-11 08:00:00',
    duration: 6,
  },
]

const sortByDeadline = (jobs) =>
  jobs.sort((jobA, jobB) =>
    Date.parse(jobA.deadline) - Date.parse(jobB.deadline))

const getWorkhoursAvailable = ({ firstDate, secondDate }) => {
  const millisecondsInAnHour = 1000 * 60 * 60
  const date1 = Date.parse(firstDate)
  const date2 = Date.parse(secondDate)

  return Math.floor((date2 - date1) / millisecondsInAnHour)
}

const getWorkWindows = ({ workhoursAvailable, batchHours }) => ({
  period: batchHours,
  slots: Math.floor(workhoursAvailable / batchHours)
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

console.log(getSchedule({
  workWindows: getWorkWindows({
    workhoursAvailable: getWorkhoursAvailable({
      firstDate: initialDate,
      secondDate: finalDate,
    }),
    batchHours,
  }),
  jobs: sortByDeadline(jobs),
}))
