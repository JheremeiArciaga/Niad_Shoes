
//menu icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector(".htop");
  header.classList.toggle("sticky", window.scrollY > 1);

  // remove icon menu
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// darkmode
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};
// loadmore
let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".container .card")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "inline-block";
  }
};

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(" ", {
  origin: "top",
});
ScrollReveal().reveal(
  "",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  "",
  { delay: 100, origin: "left" }
);
ScrollReveal().reveal(" ", { origin: "right" });
