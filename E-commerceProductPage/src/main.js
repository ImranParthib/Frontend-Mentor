import "./style.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

const products = [
  { name: "Product 1", price: 29.99, description: "Description for product 1" },
];

const app = document.querySelector("#app");

const container = document.createElement("div");
container.className = "container mx-auto px-4";

container.appendChild(Header());
container.appendChild(ProductDetails(products));

app.appendChild(container);
