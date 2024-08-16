import { allProducts } from "./data.js";

const allCategories = ["Популярности", "summer", "popular", "test"];

const findEl = (element, parent = document) => {
  return parent.querySelector(element);
};

// localStorage.setItem("product", JSON.stringify(allProducts));

const elWrap = findEl(".cards");
const Template = findEl(".template");
const elCatigor = findEl(".popul");

const elCalk = findEl(".sbm");
const elInput1 = findEl("#inp1");
const elInput2 = findEl("#inp2");

export function rendrProduct(list = allProducts, parent = elWrap) {
  parent.textContent = null;
  list.forEach((product) => {
    const newTemp = Template.content.cloneNode(true);

    const elImgTop = findEl(".img_1", newTemp);
    elImgTop.dataset.id = product.id;

    let elHasBasket = findEl(".img2", newTemp);
    elHasBasket.dataset.id = product.id;

    product.hasBasket
      ? (elHasBasket.src = "./img/buy img 22.png")
      : (elHasBasket.src = "img/div.slot (1).svg");

    const elTitle = findEl(".cart_title", newTemp);
    const elReyting = findEl(".reyt", newTemp);
    const elDiscountP = findEl(".discountP", newTemp);
    const elRealPrice = findEl(".realP", newTemp);

    elImgTop.src = product.img;
    elTitle.textContent = product.title;
    elReyting.textContent = product.reyting;
    elRealPrice.textContent = product.realP;
    elDiscountP.textContent = product.discountPrice;

    parent.appendChild(newTemp);
  });
}
rendrProduct();

elWrap.addEventListener("click", (evt) => {
  if (evt.target.className.includes("img2")) {
    const id = Number(evt.target.dataset.id);

    allProducts.forEach((product) => {
      if (product.id === id) {
        product.hasBasket = !product.hasBasket;
        rendrProduct();
        localStorage.setItem("product", JSON.stringify(allProducts));
      }
    });
  }

  /////////////   sinl page  //////////////
  if (evt.target.className.includes("img_1")) {
    const id = evt.target.dataset.id;

    localStorage.setItem("id", id);
  }
});

elCalk.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (elInput1.value !== "" && elInput2.value !== "") {
    const filtrPrice = allProducts.filter(
      (product) =>
        product.discountPrice > elInput1.value &&
        product.discountPrice < elInput2.value
    );
    rendrProduct(filtrPrice);
  }
});

window.addEventListener("DOMContentLoaded", function () {
  rendrProduct(allProducts);

  allCategories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.textContent = category;

    elCatigor.appendChild(newOption);
  });
});

elCatigor.addEventListener("change", () => {
  const filterCatigory = allProducts.filter((item) =>
    item.allCategories.includes(elCatigor.value)
  );

  rendrProduct(filterCatigory);
});
