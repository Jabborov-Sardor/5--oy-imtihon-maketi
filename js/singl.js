import { allProducts } from "./data.js";

const singlImg = document.querySelector(".sin_img");
const singlReyt = document.querySelector(".reyt");
const singTitle = document.querySelector(".title");
const singlDisc = document.querySelector(".discountPrice");
const singlRealP = document.querySelector(".realP");

const id = localStorage.getItem("id") ? +localStorage.getItem("id") : 1;
const prodactCards = JSON.parse(localStorage.getItem("product"));

const singlProduct = allProducts.filter((el) => el.id === id)[0];
singlImg.src = singlProduct.img;
singlReyt.textContent = singlProduct.reyting;
singTitle.textContent = singlProduct.title;
singlDisc.textContent = singlProduct.discountPrice;
singlRealP.textContent = singlProduct.realP;
