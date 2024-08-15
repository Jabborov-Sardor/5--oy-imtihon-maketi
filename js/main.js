import { allProducts } from "./data.js";

const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};

const elWrap = findEl(".cards");
// console.log(elWrap);

const Template = findEl(".template");

// const fragment = new DocumentFragment();
function rendrProduct(list = allProducts, parent = elWrap) {
  parent.textContent = null;
  list.forEach((product) => {
    const newTemp = Template.content.cloneNode(true);

    const elImg = findEl(".img1", newTemp);
    elImg.dataset.id = product.id;

    const elHasBasket = findEl(".img2", newTemp);
    elHasBasket.dataset.id = product.id;

    const elTitle = findEl(".cart_title", newTemp);
    const elReyting = findEl(".reyt", newTemp);
    const elDiscountP = findEl(".discountP", newTemp);
    const elRealPrice = findEl(".realP", newTemp);

    elImg.src = product.img;
    elTitle.textContent = product.title;
    elReyting.textContent = product.reyting;
    elRealPrice.textContent = product.realP;
    elDiscountP.textContent = product.discountPrice;

    parent.appendChild(newTemp);
    // console.log(parent);
  });
}
rendrProduct();
