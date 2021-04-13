const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const insertImg = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const stylesBtn = document.querySelector('#styles-buttons');
const preDefinedMemes = document.getElementById('pre-defined-memes');
const imageBorder = document.getElementById('meme-image-container').style;

function changeBorder(event) {
  imageBorder.border = '';

  if (event.target.id === 'fire') imageBorder.border = '8px dashed red';
  if (event.target.id === 'water') imageBorder.border = '9px double blue';
  if (event.target.id === 'earth') imageBorder.border = '10px groove green';
}

function changeMemeText() {
  memeText.innerHTML = textInput.value;
}

function loadMemeImg(event) {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
}

function selectPreDefinedMeme(event) {
  memeImg.src = event.target.src;
}

window.onload = () => {
  textInput.addEventListener('input', changeMemeText);

  insertImg.addEventListener('change', loadMemeImg);

  stylesBtn.addEventListener('click', changeBorder);

  preDefinedMemes.addEventListener('click', selectPreDefinedMeme);
};
