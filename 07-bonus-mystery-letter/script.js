const letterInput = document.querySelector('#letter-text');
const createBtn = document.querySelector('#create-letter');
const letterContainer = document.querySelector('#letter-created');
const wordCounter = document.querySelector('#word-counter');

const styles = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallyBig',
  'rotateLeft',
  'rotateRight',
  'skewLeft',
  'skewRight',
];

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function randomClasses(element) {
  const size = styles.length;
  element.removeAttribute('class');
  element.classList.add(styles[randomNum(size)], styles[randomNum(size)], styles[randomNum(size)], styles[randomNum(size)]);
}

function createLetter() {
  letterContainer.innerHTML = '';
  const words = letterInput.value.trim().split(' ');
  if (!letterInput.value.trim()) {
    letterContainer.innerHTML = 'Please type something.';
    randomClasses(letterContainer)
    return;
  }
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('div');
    randomClasses(word);
    word.innerHTML = `${words[i]} `;
    word.addEventListener('click', () => randomClasses(word));
    letterContainer.appendChild(word);
  }
  wordCounter.innerHTML = words.length;
}

window.onload = () => {
  createBtn.addEventListener('click', createLetter);
};
