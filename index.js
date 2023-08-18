const images = ['xem_1.jpg', 'xem_2.jpg', 'xem_3.jpg'];
let currentIndex = 0;
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const currentImage = document.getElementById('current-image');

prevButton.classList.add('hidden');

const showPrevImage = () => {
  if (currentIndex > 0) {
    currentIndex--;
    currentImage.src = `images/${images[currentIndex]}`;

    if (currentIndex === 0) {
      prevButton.classList.add('hidden');
    }
    nextButton.classList.remove('hidden');
  }
};

const showNextImage = () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    currentImage.src = `images/${images[currentIndex]}`;

    if (currentIndex === images.length - 1) {
      nextButton.classList.add('hidden');
    }
    prevButton.classList.remove('hidden');
  }
};

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);