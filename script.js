const barMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");
const sideBar = document.querySelector(".side-bar-list");

closeMenu.addEventListener("click", () => {
  sideBar.style.display = "none";
  barMenu.style.display = "block";
  closeMenu.style.display = "none";
});
barMenu.addEventListener("click", () => {
  sideBar.style.display = "block";
  closeMenu.style.display = "block";
  barMenu.style.display = "none";
});

const btns = document.querySelectorAll(".btn-list");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btns.forEach(function (b) {
      b.classList.remove("active");
    });
    this.classList.add("active");
    const currentInfo = document.querySelector(`.info-${this.dataset.index}`);
    const infos = document.querySelectorAll(".info");
    infos.forEach(function (info) {
      info.classList.remove("visible");
    });
    currentInfo.classList.add("visible");
  });
});
///////////slider
const slides = document.querySelectorAll(".slide");

let currentSlide = 0

function showSlide(){
  slides.forEach((slide)=>slide.classList.remove("active"))
  currentSlide++
  if(currentSlide>slides.length){
    currentSlide  =1

  }
  slides[currentSlide -1].classList.add("active")
  setTimeout(showSlide,5000)
}
showSlide()
