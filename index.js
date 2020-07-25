const {
  getWorkWindows,
  getWorkhoursAvailable,
  getSchedule,
  sortByDeadline,
} = require('./utils')

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
