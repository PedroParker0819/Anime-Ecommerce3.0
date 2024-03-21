// Slider
const slides = document.querySelectorAll('.slide');
slides.forEach((slide, index) => {
  const prevButton = slide.querySelector('.slider-button-left');
  const nextButton = slide.querySelector('.slider-button-right');
  let currentIndex = index;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  });

  // Inicializar o slide atual
  showSlide(currentIndex);
});

let carrinho = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemCount = document.querySelector('.cart-item-count');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    carrinho.push('Nome do Item');
    cartItemCount.textContent = carrinho.length;
  });
});

const favoriteButtons = document.querySelectorAll('.favorite-button');

favoriteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('favorited');
  });
});