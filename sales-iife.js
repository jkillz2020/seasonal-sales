"use strict"
let list = document.getElementById("products-list");


function showProducts (products) {
  for(let i = 0; i < products.length; i++){
    let currentProduct = products[i];
  

let outputString = ""
outputString += `<h1>${currentProduct.name}</h1>
<h5>${currentProduct.price}</h5>`;
list.innerHTML += outputString;
  }
}
// function showHerbivores (herbivores) {
//   for(let i = 0; i < herbivores.length; i++){
//     let currentHerbivore = herbivores[i];
  

// let outputString = ""
// outputString += `<h1>${currentHerbivore.name}</h1>
// <h5>${currentHerbivore.family}</h5>`;
// list.innerHTML += outputString;
//   }
// }

placeInDom.loadProducts(showProducts);
// Predator.loadHerbivores(showHerbivores);