const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
}

showSlide(currentSlide);

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

const heart = document.querySelector('.heart');
let isFavorited = false;

heart.addEventListener('click', () => {
  if (isFavorited) {
    heart.style.color = 'gray';
    isFavorited = false;
  } else {
    heart.style.color = 'red';
    isFavorited = true;
  }
});