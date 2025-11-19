// =============================
// script.js — UMKM Olahan Bontot
// Sederhana, rapi, dan fungsional
// =============================


// Smooth scroll ke section produk
function scrollToProduk() {
const produkSection = document.getElementById("produk");
if (produkSection) {
produkSection.scrollIntoView({ behavior: "smooth" });
}
}


// Tambahan: highlight menu saat discroll
window.addEventListener("scroll", () => {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");


let current = "";


sections.forEach((section) => {
const sectionTop = section.offsetTop - 120;
if (pageYOffset >= sectionTop) {
current = section.getAttribute("id");
}
});


navLinks.forEach((a) => {
a.classList.remove("active");
if (a.getAttribute("href") === `#${current}`) {
a.classList.add("active");
}
});
});