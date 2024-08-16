import { allProducts } from "./data.js";

const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};

const elWrap = findEl(".cards");
const Template = findEl(".template");
function rendrProduct(list = allProducts, parent = elWrap) {
  parent.textContent = null;
  list.forEach((product) => {
    const newTemp = Template.content.cloneNode(true);

    const elImgTop = findEl(".img_1", newTemp);
    // elImgTop.dataset.id = product.id;

    let elHasBasket = findEl(".img2", newTemp);
    elHasBasket.dataset.id = product.id;

    product.hasBasket
      ? (elHasBasket.src = "./img/buy img 22.png")
      : (elHasBasket.src = "img/div.slot (1).svg");

    const elTitle = findEl(".cart_title", newTemp);
    const elReyting = findEl(".reyt", newTemp);
    const elDiscountP = findEl(".discountP", newTemp);
    const elRealPrice = findEl(".realP", newTemp);

    // elImgTop.src = product.img;
    elTitle.textContent = product.title;
    elReyting.textContent = product.reyting;
    elRealPrice.textContent = product.realP;
    elDiscountP.textContent = product.discountPrice;

    parent.appendChild(newTemp);
  });
}

rendrProduct(allProducts.filter((product) => product.hasBasket === true));
elWrap.addEventListener("click", (evt) => {
  if (evt.target.className.includes("img2")) {
    const id = Number(evt.target.dataset.id);

    allProducts.forEach((product) => {
      if (product.id === id) {
        product.hasBasket = !product.hasBasket;
        rendrProduct(
          allProducts.filter((product) => product.hasBasket === true)
        );

        localStorage.setItem("product", JSON.stringify(allProducts));
      }
    });
  }
});
