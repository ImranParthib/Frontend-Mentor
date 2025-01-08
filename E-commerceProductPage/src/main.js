import "./style.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

const products = [
  {
    id: 1,
    image: "../src/images/products/image-product-1.jpg",
    previewimages: [
      "../src/images/products/image-product-1.jpg",
      "../src/images/products/image-product-2.jpg",
      "../src/images/products/image-product-3.jpg",
      "../src/images/products/image-product-4.jpg",
    ],
    moto: "SNEAKER COMPANY",
    title: "Fall Limited Edition Sneakers",
    price: 250.0,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  },
];

const app = document.querySelector("#app");

const container = document.createElement("div");
container.className = "container mx-auto px-4";

container.appendChild(Header());
container.appendChild(ProductDetails(products));

app.appendChild(container);
