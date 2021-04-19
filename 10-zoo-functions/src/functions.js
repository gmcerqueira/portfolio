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

//
//
//
//
// 0938aa23-f153-4937-9f88-4858b24d6bce , e8481c1d-42ea-4610-8e11-1752cfc05a46
