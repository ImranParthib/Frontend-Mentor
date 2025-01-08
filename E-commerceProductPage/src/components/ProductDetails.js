export default function ProductDetails(products) {
  const product = products[0]; // Get the first product

  // Main container
  const container = document.createElement("div");
  container.className = "flex flex-col md:flex-row gap-8 py-8";

  // Image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "w-full md:w-1/2";

  // Preview image container
  const previewImageContainer = document.createElement("div");
  previewImageContainer.className = "flex gap-2";

  product.previewimages.forEach((previewImageSrc) => {
    const previewImage = document.createElement("img");
    previewImage.src = previewImageSrc;
    previewImage.alt = product.title;
    previewImage.className = "w-1/4 rounded-lg object-cover";
    previewImageContainer.appendChild(previewImage);
  });

  // Main Image
  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  image.className = "w-4/5 rounded-lg object-cover";
  imageContainer.appendChild(image);
  imageContainer.appendChild(previewImageContainer);

  // Content container
  const contentContainer = document.createElement("div");
  contentContainer.className = "w-full md:w-1/2 p-4 space-y-6";

  // Company motto
  const motto = document.createElement("h2");
  motto.textContent = product.moto;
  motto.className = "text-gray-500 font-bold tracking-wide text-xl uppercase";

  // Product title
  const title = document.createElement("h1");
  title.textContent = product.title;
  title.className = "text-3xl font-bold text-gray-900";

  // Product description
  const description = document.createElement("p");
  description.textContent = product.description;
  description.className = "text-gray-600";

  // Price container
  const priceContainer = document.createElement("div");
  priceContainer.className = "space-y-2";

  const priceRow = document.createElement("div");
  priceRow.className = "flex items-center gap-4";

  const price = document.createElement("span");
  price.textContent = `$${product.price}.00`;
  price.className = "text-3xl font-bold";

  const discount = document.createElement("span");
  discount.textContent = "50%";
  discount.className =
    "bg-[#bbbbbb] text-orange-500 px-2 py-1 rounded-md font-bold";

  priceRow.appendChild(price);
  priceRow.appendChild(discount);

  const originalPrice = document.createElement("div");
  originalPrice.textContent = `$${(product.price * 2).toFixed(2)}`;
  originalPrice.className = "text-gray-400 line-through";

  priceContainer.appendChild(priceRow);
  priceContainer.appendChild(originalPrice);

  // Actions container
  const actionsContainer = document.createElement("div");
  actionsContainer.className = "flex flex-col sm:flex-row gap-4";

  // Quantity selector
  const quantitySelector = createQuantitySelector(product, price);

  // Add to cart button
  const addToCartBtn = document.createElement("button");
  addToCartBtn.className =
    "flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-3 flex items-center justify-center gap-2";
  addToCartBtn.innerHTML = `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
    Add to cart
  `;

  actionsContainer.appendChild(quantitySelector);
  actionsContainer.appendChild(addToCartBtn);

  // Append all elements to content container
  contentContainer.appendChild(motto);
  contentContainer.appendChild(title);
  contentContainer.appendChild(description);
  contentContainer.appendChild(priceContainer);
  contentContainer.appendChild(actionsContainer);

  // Append main sections to container
  container.appendChild(imageContainer);
  container.appendChild(contentContainer);

  return container;
}

function createQuantitySelector(product, priceElement) {
  const container = document.createElement("div");
  container.className = "flex items-center bg-gray-100 rounded-lg";

  const minusBtn = document.createElement("button");
  minusBtn.className = "px-4 py-2 text-orange-500 hover:text-orange-600";
  minusBtn.innerHTML = `
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
    </svg>
  `;

  const quantityDisplay = document.createElement("span");
  quantityDisplay.className = "w-12 text-center font-bold";
  quantityDisplay.textContent = "0";

  const plusBtn = document.createElement("button");
  plusBtn.className = "px-4 py-2 text-orange-500 hover:text-orange-600";
  plusBtn.innerHTML = `
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
    </svg>
  `;

  // Add event listeners
  let quantity = 0;
  minusBtn.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      quantityDisplay.textContent = quantity;
      priceElement.textContent = `$${(product.price * quantity).toFixed(2)}`;
    }
  });

  plusBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
    priceElement.textContent = `$${(product.price * quantity).toFixed(2)}`;
  });

  container.appendChild(minusBtn);
  container.appendChild(quantityDisplay);
  container.appendChild(plusBtn);

  return container;
}
