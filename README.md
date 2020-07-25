# Summary

- [About](#about)
- [Technologies](#technologies-used)
- [How to Use](#how-use)

<a id="about"></a>

## About

This algorithm returns an array containing the `id`s of which task order you should approach.

For example, given the following data:

```javascript
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

module.exports = {
  initialDate,
  finalDate,
  batchHours,
  jobs,
}
```

The algorithm will assess those informations based on task deadline, task duration, total workhours available, and size of execution window.
For such data, the output will be:

```javacript
[ [ 1, 3 ], [ 2 ] ]
```

<a id="technologies-used"></a>

## Technologies Used

The project was developed using the following technologies

- [NodeJS](https://nodejs.org/)
- [Jest](https://jestjs.io/)

<a id="how-use"></a>

## How to Use

### Execution

```bash
# Process given data and return a schedule suggestion
yarn start
```

### Running tests

```bash
# Install dependencies
yarn install
```

> If you don't have <i>yarn</i> installed in your machine, please, follow these [instructions](https://classic.yarnpkg.com/en/docs/install/)

```bash
# Run unit tests
yarn test
```

---

<h4 align="center">
    Made with 💛 by <a href="https://www.linkedin.com/in/victorhsantiago" target="_blank">Victor Santiago</a>
</h4>
