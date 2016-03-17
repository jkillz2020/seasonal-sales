"use strict"
let placeInDom = (function () {
  let categories = [];
  let products = [];


  return {
    loadCategories: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
      loader.open("GET", "categories.json")//tell loader where to go
      loader.send();//execute loader
      loader.addEventListener("load", function () {
        // Set the value of the private array
        categories = JSON.parse(this.responseText).categories;
        
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(categories);
      });
    
  
},

    loadProducts: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
      loader.open("GET", "products.json");
      loader.send();
      loader.addEventListener("load", function() {
        products = JSON.parse(this.responseText).products;

        callbackToInvoke(products);
      });
    }
}
})();
