//Spinner
window.addEventListener("load", () => {
  // Simulate loading delay
  setTimeout(() => {
    // Hide spinner and show content
    document.getElementById("spinner").style.display = "none";
    document.querySelectorAll("content").classList.remove("hidden"); //class content hidden and not
  }, 2000); // 2000ms = 2 seconds
});

const body = document.body;
// JavaScript to toggle the open class
document.querySelector(".burger-icon").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector("#mobile-menu").classList.toggle("open");
  body.classList.toggle("no-scroll");
});

//Hero section with arows and indicators
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const indicators = document.querySelectorAll(".carousel-indicator");

  let currentIndex = 0;

  function showCarouselItem(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateIndicators();
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showCarouselItem(currentIndex);
  }

  function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showCarouselItem(currentIndex);
  }

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showCarouselItem(currentIndex);
    });
  });

  // Initialize
  showCarouselItem(currentIndex);

  nextButton.addEventListener("click", nextItem);
  prevButton.addEventListener("click", prevItem);
});
