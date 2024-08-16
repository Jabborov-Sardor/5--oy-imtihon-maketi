import { allProducts } from "./data.js";
import { rendrProduct } from "./main.js";

const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};

rendrProduct(allProducts.filter((product) => product.hasBasket === true));
// console.log(rendrProduct);
