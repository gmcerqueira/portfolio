(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';
const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

module.exports = {
  animals: [
    {
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Maxwell',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Faustino',
          sex: 'male',
          age: 7,
        },
        {
          name: 'Dee',
          sex: 'female',
          age: 14,
        },
      ],
    },
    {
      id: tigersId,
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Shu',
          sex: 'female',
          age: 19,
        },
        {
          name: 'Esther',
          sex: 'female',
          age: 17,
        },
      ],
    },
    {
      id: bearsId,
      name: 'bears',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Hiram',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Edwardo',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Milan',
          sex: 'male',
          age: 4,
        },
      ],
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Joe',
          sex: 'male',
          age: 10,
        },
        {
          name: 'Tad',
          sex: 'male',
          age: 12,
        },
        {
          name: 'Keri',
          sex: 'female',
          age: 2,
        },
        {
          name: 'Nicholas',
          sex: 'male',
          age: 2,
        },
      ],
    },
    {
      id: ottersId,
      name: 'otters',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Neville',
          sex: 'male',
          age: 9,
        },
        {
          name: 'Lloyd',
          sex: 'male',
          age: 8,
        },
        {
          name: 'Mercedes',
          sex: 'female',
          age: 9,
        },
        {
          name: 'Margherita',
          sex: 'female',
          age: 10,
        },
      ],
    },
    {
      id: frogsId,
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      residents: [
        {
          name: 'Cathey',
          sex: 'female',
          age: 3,
        },
        {
          name: 'Annice',
          sex: 'female',
          age: 2,
        },
      ],
    },
    {
      id: snakesId,
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      residents: [
        {
          name: 'Paulette',
          sex: 'female',
          age: 5,
        },
        {
          name: 'Bill',
          sex: 'male',
          age: 6,
        },
      ],
    },
    {
      id: elephantsId,
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4,
        },
      ],
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Gracia',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Antone',
          sex: 'male',
          age: 9,
        },
        {
          name: 'Vicky',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Clay',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Arron',
          sex: 'male',
          age: 7,
        },
        {
          name: 'Bernard',
          sex: 'male',
          age: 6,
        },
      ],
    },
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, olaId],
      responsibleFor: [lionId, tigersId],
    },
    {
      id: burlId,
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: [stephanieId],
      responsibleFor: [
        lionId,
        tigersId,
        bearsId,
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b'],
    },
    {
      id: olaId,
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: [stephanieId],
      responsibleFor: [
        ottersId,
        frogsId,
        snakesId,
        elephantsId,
      ],
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: [burlId, olaId],
      responsibleFor: [snakesId, elephantsId],
    },
    {
      id: stephanieId,
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
        ottersId,
      ],
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: [burlId, olaId],
      responsibleFor: [ottersId, frogsId],
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: [
        tigersId,
        bearsId,
      ],
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: [stephanieId],
      responsibleFor: [
        elephantsId,
        bearsId,
        lionId,
      ],
    },
  ],
  hours: {
    Tuesday: { open: 8, close: 18 },
    Wednesday: { open: 8, close: 18 },
    Thursday: { open: 10, close: 20 },
    Friday: { open: 10, close: 20 },
    Saturday: { open: 8, close: 22 },
    Sunday: { open: 8, close: 20 },
    Monday: { open: 0, close: 0 },
  },
  prices: {
    Adult: 49.99,
    Senior: 24.99,
    Child: 20.99,
  },
};

},{}],2:[function(require,module,exports){
const zoo = require('./zoo');
// const data = require('./data');

// ------------------------------------------------------------------------

const animalIdInput = document.querySelector('#animal-id');
const animalIdBtn = document.querySelector('#check-animal-id');
const animalIdResponse = document.querySelector('#animal-id-response');

animalIdBtn.addEventListener('click', () => {
  const inputFormatted = animalIdInput.value.trim().split(/\s+,+\s+/);
  const result = zoo.animalsByIds(...inputFormatted);
  animalIdResponse.innerHTML = result.map((animal) => {
    if (animal) return animal.name;
    return 'I need the animal ID to work.';
  });
});

// ------------------------------------------------------------------------

const animalsSpecieInput = document.querySelector('#animal-specie');
const minimumAgeInput = document.querySelector('#minimum-age');
const minimumAgeBtn = document.querySelector('#check-minimum-age');
const minimumAgeResponse = document.querySelector('#minimum-age-response');

minimumAgeBtn.addEventListener('click', () => {
  const specieInput = animalsSpecieInput.value.trim();
  const ageInput = parseInt(minimumAgeInput.value, 10);

  minimumAgeResponse.innerHTML = zoo.animalsOlderThan(specieInput, ageInput);
});

// ------------------------------------------------------------------------






// 0938aa23-f153-4937-9f88-4858b24d6bce , e8481c1d-42ea-4610-8e11-1752cfc05a46
},{"./zoo":3}],3:[function(require,module,exports){
/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;

function animalsByIds(...ids) {
  return ids.map((id) => animals.find((animal) => animal.id === id));
}

// ----------------------------------------------------------------------------------

function animalsOlderThan(animalName, age) {
  return animals
    .find((animal) => animal.name === animalName)
    .residents.every((resident) => resident.age >= age);
}

// ----------------------------------------------------------------------------------

function employeeByName(employeeName) {
  return employeeName
    ? employees.find((employee) =>
      employee.firstName === employeeName
      || employee.lastName === employeeName)
    : {};
}

// ----------------------------------------------------------------------------------

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// ----------------------------------------------------------------------------------

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

// ----------------------------------------------------------------------------------

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// ----------------------------------------------------------------------------------

function animalCount(species) {
  return species
    ? animals.find((animal) => animal.name === species).residents.length
    : animals.reduce((result, currentAnimal) => {
      const object = result;
      object[currentAnimal.name] = currentAnimal.residents.length;
      return object;
    }, {});
}

// ----------------------------------------------------------------------------------

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const keys = Object.keys(entrants);
  const values = Object.values(entrants);

  return keys.reduce((result, key, index) =>
    result + (prices[key] * values[index]),
  0);
}

// ----------------------------------------------------------------------------------

function listOfRegions() {
  return animals.reduce((result, animal) => {
    const region = result;
    if (!region[animal.location]) region[animal.location] = [];
    return region;
  }, {});
}

function defaultList() {
  const list = listOfRegions();
  animals.map((animal) => list[animal.location].push(animal.name));
  return list;
}

function animalsNames(specie, args) {
  let names = animals.find((animal) => animal.name === specie)
    .residents.map((resident) => resident.name);
  if (args.sex) {
    names = animals.find((animal) => animal.name === specie)
      .residents.filter((resident) => resident.sex === args.sex)
      .map((resident) => resident.name);
  }
  if (args.sorted) names.sort();
  return names;
}

function listAnimalsWithParams(args) {
  const list = listOfRegions();
  animals.map((animal) =>
    list[animal.location].push({ [animal.name]: animalsNames(animal.name, args) }));
  return list;
}

function animalMap(options = '') {
  if (options.includeNames) return listAnimalsWithParams(options);

  return defaultList();
}

// ----------------------------------------------------------------------------------
function specificWeekDay(day) {
  const line = {};
  if (hours[day].open === 0 || hours[day].close === 0) line[day] = 'CLOSED';
  else line[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  return line;
}
function defaultSchedule() {
  const days = Object.entries(hours);
  const scheduleTable = days.reduce((result, day) => {
    const line = result;
    if (day[1].open === 0 || day[1].close === 0) line[day[0]] = 'CLOSED';
    else line[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    return line;
  }, {});
  return scheduleTable;
}

function schedule(dayName) {
  if (dayName) return specificWeekDay(dayName);

  return defaultSchedule();
}

// ----------------------------------------------------------------------------------

function oldestFromFirstSpecies(id) {
  const employeeResponsible = employees.find((employee) => employee.id === id);
  const firstAnimalId = employeeResponsible.responsibleFor[0];
  const { name, sex, age } = animals.find((animal) => animal.id === firstAnimalId)
    .residents.reduce((result, resident) => {
      if (resident.age > result.age) return resident;
      return result;
    });
  return [name, sex, age];
}

// ----------------------------------------------------------------------------------

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] = parseFloat(Math.round((prices[key]
      * (1 + percentage / 100)) * 100) / 100);
  });
}

// ----------------------------------------------------------------------------------

function animalsCovered(employee) {
  const ids = employee.responsibleFor;
  const listAnimals = ids.map((id) => animals.find((animal) => animal.id === id).name);
  return listAnimals;
}

function employeeResponsibilities(searchParam) {
  const employeeResponsible = employees.find((employee) =>
    employee.id === searchParam
    || employee.firstName === searchParam
    || employee.lastName === searchParam);
  return {
    [`${employeeResponsible.firstName} ${employeeResponsible.lastName}`]:
      animalsCovered(employeeResponsible),
  };
}

function employeeCoverage(idOrName) {
  if (idOrName) return employeeResponsibilities(idOrName);

  return employees.reduce((result, employee) => {
    const line = result;
    line[`${employee.firstName} ${employee.lastName}`] = animalsCovered(employee);
    return line;
  }, {});
}

module.exports = {
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
  animalCount,
  entryCalculator,
  animalMap,
  schedule,
  oldestFromFirstSpecies,
  increasePrices,
  employeeCoverage,
};

},{"./data":1}]},{},[2]);
