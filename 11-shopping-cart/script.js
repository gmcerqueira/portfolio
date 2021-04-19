const storage = localStorage;
const cartClass = '.cart__items';

function productInStorage(id, products) {
  return products.find((product) => product.id === id);
}

function saveProductIdOnLocalStorage(product) {
  if (!storage.length) storage.setItem('products', JSON.stringify([product]));
  else {
    const arrProducts = JSON.parse(storage.getItem('products'));
    if (productInStorage(product.id, arrProducts)) return;
    arrProducts.push(product);
    storage.setItem('products', JSON.stringify(arrProducts));
  }
}

function removeProductIdOnLocalStorage(id) {
  const localStorageArr = JSON.parse(storage.getItem('products'));
  const productObj = localStorageArr.find((product) => product.id === id);
  const index = localStorageArr.indexOf(productObj);
  localStorageArr.splice(index, 1);
  storage.setItem('products', JSON.stringify(localStorageArr));
}

async function updateTotalPrice() {
  const totalPriceTag = document.querySelector('.total-price');
  try {
    const arrProducts = await JSON.parse(storage.getItem('products'));
    const totalRes = (arrProducts.reduce((result, acc) => result + acc.price, 0));
    totalPriceTag.innerText = totalRes.toFixed(2);
  } catch (error) {
    console.log(error);
  }
}

async function cartItemClickListener(event) {
  const item = event.target.parentNode;
  const itemID = item.querySelector('span.item__sku').innerText;
  const cartList = document.querySelector(cartClass);
  try {
    removeProductIdOnLocalStorage(itemID);
    await updateTotalPrice();
    cartList.removeChild(item);
  } catch (error) {
    console.log(error);
  }
}

function createCartItemElement({ id, title, price }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `<span class="item__sku">${id}</span>
                  <div className="item__title">${title}</div> 
                  <div class="item__price">R$ ${price.toFixed(2)}</div> `;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function loadProductCartFromLocalStorage() {
  const cartList = document.querySelector(cartClass);
  const ids = await JSON.parse(storage.getItem('products'));
  try {
    if (!ids) return;
    ids.map((id) =>
      cartList.appendChild(createCartItemElement(id)));
    await updateTotalPrice();
  } catch (error) {
    console.log(error);
  }
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText, eventListener = []) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.addEventListener('click', eventListener);
  return e;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

async function addProductToCart(event) {
  const cartList = document.querySelector(cartClass);
  const item = event.target.parentNode;
  const arrProducts = JSON.parse(storage.getItem('products'));

  try {
    const id = await getSkuFromProductItem(item);
    if (productInStorage(id, arrProducts)) return alert('Product already in cart');
    const res = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await res.json();
    cartList.appendChild(createCartItemElement(data));
    saveProductIdOnLocalStorage(data);
    updateTotalPrice();
  } catch (error) {
    console.log(error);
  }
}

function createProductItemElement({ id, title, thumbnail }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Add to cart!', addProductToCart),
  );
  const img = document.createElement('img');
  img.src = './img/shopping_cart.svg';
  section.querySelector('.item__add').appendChild(img);

  return section;
}

async function createProductList(url) {
  const productList = document.querySelector('.items');
  const items = document.querySelector('.items');
  const loading = document.createElement('div');
  loading.className = 'loading loadingio-spinner-eclipse';
  loading.innerHTML = '<div class="ldio"><div></div></div>';
  items.appendChild(loading);
  try {
    const res = await fetch(url);
    const data = await res.json();
    setTimeout(() => {
      items.removeChild(loading);
      data.results
        .forEach((product) => productList.appendChild(createProductItemElement(product)));
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}

function clearCart() {
  document.querySelector('.cart__items').innerHTML = '';
  document.querySelector('.total-price').innerHTML = '0,00';
  storage.setItem('products', JSON.stringify([]));
}

async function newSearch() {
  const searchInput = document.querySelector('.search-input').value;
  document.querySelector('.items').innerHTML = '';
  createProductList(`https://api.mercadolibre.com/sites/MLB/search?q=${searchInput}`);
}

window.onload = async function onload() {
  createProductList('https://api.mercadolibre.com/sites/MLB/search?category=MLB1648');

  loadProductCartFromLocalStorage();

  document.querySelector('.search-button').addEventListener('click', newSearch);

  document.querySelector('.search-input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') newSearch();
  });

  document.querySelector('.empty-cart').addEventListener('click', clearCart);
};
