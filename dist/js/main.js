// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Inital State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// Get modal element
var modal1 = document.getElementById("simpleModal1");
var modal2 = document.getElementById("simpleModal2");
var modal3 = document.getElementById("simpleModal3");
// var modal4 = document.getElementById("simpleModal4");
// var modal5 = document.getElementById("simpleModal5");

// Get open modal button
var modalBtn1 = document.getElementById("modalBtn1");
var modalBtn2 = document.getElementById("modalBtn2");
var modalBtn3 = document.getElementById("modalBtn3");
// var modalBtn4 = document.getElementById("modalBtn4");
// var modalBtn5 = document.getElementById("modalBtn5");

// Get close button
var closeBtn1 = document.getElementById("closeBtn1");
var closeBtn2 = document.getElementById("closeBtn2");
var closeBtn3 = document.getElementById("closeBtn3");
// var closeBtn4 = document.getElementById("closeBtn4");
// var closeBtn5 = document.getElementById("closeBtn5");

//Listen for open click
modalBtn1.addEventListener("click", openModal1);
modalBtn2.addEventListener("click", openModal2);
modalBtn3.addEventListener("click", openModal3);
// modalBtn4.addEventListener("click", openModal4);
// modalBtn5.addEventListener("click", openModal5);

// Listen for close click
closeBtn1.addEventListener("click", closeModal1);
closeBtn2.addEventListener("click", closeModal2);
closeBtn3.addEventListener("click", closeModal3);
// closeBtn4.addEventListener("click", closeModal4);
// closeBtn5.addEventListener("click", closeModal5);

// Listen for outside click
window.addEventListener("click", outsideClick);

// Open Modal
function openModal1() {
  modal1.style.display = "block";
}
function openModal2() {
  modal2.style.display = "block";
}
function openModal3() {
  modal3.style.display = "block";
}
// function openModal4() {
//   modal4.style.display = "block";
// }
// function openModal5() {
//   modal5.style.display = "block";
// }

// Close Modal
function closeModal1() {
  modal1.style.display = "none";
}
function closeModal2() {
  modal2.style.display = "none";
}
function closeModal3() {
  modal3.style.display = "none";
}
// function closeModal4() {
//   modal4.style.display = "none";
// }
// function closeModal5() {
//   modal5.style.display = "none";
// }

// Function to close modal if outside window
function outsideClick(e) {
  if (e.target == modal1) {
    modal1.style.display = "none";
  }
  if (e.target == modal2) {
    modal2.style.display = "none";
  }
  if (e.target == modal3) {
    modal3.style.display = "none";
  }
  // if (e.target == modal4) {
  //   modal4.style.display = "none";
  // }
  // if (e.target == modal5) {
  //   modal5.style.display = "none";
  // }
}
