const colorPallet = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const clearBoardBtn = document.querySelector('#clear-board');
const generateColorBtn = document.querySelector('#generate-color');
const palletInput = document.querySelector('#pallet-size');
const generatePalletBtn = document.querySelector('#generate-pallet');
const boardSizeInput = document.querySelector('#board-size');
const generateBoardBtn = document.querySelector('#generate-board');

// EN - Create random color
// PT-BR - Cria cor aleatória
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

// EN - Select color from the color palette when clicked
// PT-BR - Seleciona cor da paleta de cores ao ser clicada
function selectColor(event) {
  const children = colorPallet.childNodes;
  for (let i = 0; i < children.length; i += 1) {
    children[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// EN - Create container with random color
// PT-BR - Cria container com cor aleatória
function createColorPixel() {
  const colorPixel = document.createElement('div');
  colorPixel.className = 'color';
  colorPixel.style.backgroundColor = randomColor();
  colorPixel.addEventListener('click', selectColor);
  colorPallet.appendChild(colorPixel);
}

// EN - Sets black as initial default color
// PT-BR - Define preto como cor padrão inicial
function defaultColor() {
  colorPallet.firstElementChild.classList.add('selected');
  colorPallet.firstElementChild.style.backgroundColor = 'black';
}

// EN - Create colors pallet
// PT-BR - Cria paleta de cores
function createColorPalette(numberOfColors) {
  colorPallet.innerHTML = '';
  for (let i = 0; i < numberOfColors; i += 1) createColorPixel();
  defaultColor();
}

// EN - Draw with the selected color from pallet
// PT-BR - Desenha com a cor selecionada da paleta
function drawPixel() {
  const colorSelected = document.querySelector('.selected').style
    .backgroundColor;
  this.style.backgroundColor = colorSelected;
}

// EN - Create line with desired size
// PT-BR - Cria linha com tamanho desejado
function createRow(size) {
  const row = document.createElement('tr');
  row.className = 'row';
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('td');
    pixel.className = 'pixel';
    pixel.addEventListener('click', drawPixel);
    row.appendChild(pixel);
  }
  return row;
}

// EN - Create frame with desired size
// PT-BR - Cria quadro com tamanho desejado
function createBoard(size) {
  pixelBoard.innerHTML = '';
  for (let i = 0; i < size; i += 1) {
    pixelBoard.appendChild(createRow(size));
  }
}

// EN - Reset board to white
// PT-BR - Redefine o quadro para branco
function clearBoard() {
  const board = document.querySelectorAll('.pixel');
  console.log(board);
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
}

// EN - Create new color pallet with user input
// PT-BR - Cria nova paleta de cores com entrada do usuário
function resizePallet() {
  if (!palletInput.value) return alert('Invalid color number!');
  createColorPalette(palletInput.value);
  palletInput.value = '';
}

// EN - Resize board with user input
// PT-BR - Redimensiona o quadro com entrada do usuário
function resizeBoard() {
  let size = boardSizeInput.value;
  if (!size) return alert('Invalid size!');
  if (size < 5) size = 5;
  if (size > 50) size = 50;
  createBoard(size);
  boardSizeInput.value = '';
}

// EN - Loaded after window is loaded
// PT-BR - Carregado após janela ser carregada
window.onload = () => {
  createColorPalette(8);
  createBoard(15);
  generateColorBtn.addEventListener('click', createColorPixel);
  generatePalletBtn.addEventListener('click', resizePallet);
  generateBoardBtn.addEventListener('click', resizeBoard);
  clearBoardBtn.addEventListener('click', clearBoard);
};
