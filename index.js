const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;
let slideInterval;

slides[slideIndex].classList.add('active');
dots[slideIndex].classList.add('active-dot');

prevBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
});
nextBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    goToSlide(index);
  });
});

function prevSlide() {
  goToSlide((slideIndex === 0) ? slides.length - 1 : slideIndex - 1);
  startSlideInterval();
}

function nextSlide() {
  goToSlide((slideIndex === slides.length - 1) ? 0 : slideIndex + 1);
  startSlideInterval();
}

function goToSlide(index) {
  slides[slideIndex].classList.remove('active');
  dots[slideIndex].classList.remove('active-dot');

  slideIndex = index;
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active-dot');

  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function startSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    nextSlide();
  },2000);
}

startSlideInterval();
