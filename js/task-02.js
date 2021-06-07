const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const productList = document.querySelector('ul');
const elements = ingredients.map(name => {
    const productEl = document.createElement('li');
    productEl.textContent = name;
    productEl.classList.add('ingredient');
    
    return productEl;

})
productList.append(...elements);
console.log(productList);

