window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

const hamburger = document.querySelector(".hamburger-menu");
const toggleMenu = () => {
  const open = document.querySelector(".container").classList.toggle("change");
  hamburger.setAttribute("aria-expanded", open);
};
hamburger.addEventListener("click", toggleMenu);
// the menu button is a <div>: make Enter/Space work for keyboard users
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
