export default function Header() {
  const header = document.createElement("header");
  header.className = "flex justify-between items-center p-4";

  const leftSection = document.createElement("div");
  leftSection.className = "flex items-center space-x-4";

  const menuIcon = document.createElement("img");
  menuIcon.src = "src/images/icon-menu.svg";
  menuIcon.alt = "Menu";
  menuIcon.className = "w-5 h-5 md:hidden";
  leftSection.appendChild(menuIcon);

  const logo = document.createElement("img");
  logo.src = "src/images/logo.svg";
  logo.alt = "Logo";
  logo.className = "w-32 h-auto ";
  leftSection.appendChild(logo);

  const nav = document.createElement("nav");
  nav.className = "hidden md:flex items-center space-x-4";

  const navLinks = document.createElement("ul");
  navLinks.className = "flex space-x-10 ml-10";

  const links = ["Collections", "Men", "Women", "About", "Contact"];
  links.forEach((linkText) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = linkText;
    a.className = "text-gray-600 hover:text-gray-900";
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  nav.appendChild(navLinks);
  leftSection.appendChild(nav);

  const rightSection = document.createElement("div");
  rightSection.className = "flex items-center space-x-4";

  const cartIcon = document.createElement("img");
  cartIcon.src = "/src/images/icon-cart.svg";
  cartIcon.alt = "Cart";
  cartIcon.className = "w-6 h-6";

  const profileImage = document.createElement("img");
  profileImage.src = "src/images/image-avatar.png";
  profileImage.alt = "Profile";
  profileImage.className = "w-8 h-8 rounded-full";

  rightSection.appendChild(cartIcon);
  rightSection.appendChild(profileImage);

  header.appendChild(leftSection);
  header.appendChild(rightSection);

  const mobileNav = document.createElement("div");
  mobileNav.className = "fixed inset-0 bg-white z-50 p-6 hidden w-3/5 ml-6";

  const closeIcon = document.createElement("img");
  closeIcon.src = "src/images/icon-close.svg";
  closeIcon.alt = "Close";
  closeIcon.className = "w-5 h-5 mb-12";
  mobileNav.appendChild(closeIcon);

  const mobileNavLinks = document.createElement("ul");
  mobileNavLinks.className = "space-y-6";

  links.forEach((linkText) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = linkText;
    a.className = "text-gray-900 text-xl font-bold hover:text-gray-900";
    li.appendChild(a);
    mobileNavLinks.appendChild(li);
  });

  mobileNav.appendChild(mobileNavLinks);
  document.body.appendChild(mobileNav);

  menuIcon.addEventListener("click", () => {
    mobileNav.classList.remove("hidden");
  });

  closeIcon.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });

  return header;
}
