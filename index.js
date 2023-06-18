// Code for Auto Navbar scrolling

const section = document.querySelectorAll("section");
const navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // Code for Sticky Navbar
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//   Code for Toggle Changer
let menubar = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Code for changing text

var type = new Typed(".textline", {
  strings: ["Web Developer", "Data Scientist", "Blockchain Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
