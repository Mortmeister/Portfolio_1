const allSlides = document.querySelectorAll(".portfolio-slide");
const previousArrowButton = document.getElementById("prevBtn");
const nextArrowButton = document.getElementById("nextBtn");
const slideCounterNumberText = document.getElementById("counterCurrent");
const carouselWrapperElement = document.getElementById("carousel");

let currentSlideNumber = 0;
const totalNumberOfSlides = allSlides.length;

function showSlideByIndex(slideIndexToShow) {
  const indexAfterLoopingAround =
    (slideIndexToShow + totalNumberOfSlides) % totalNumberOfSlides;

  if (indexAfterLoopingAround === currentSlideNumber) {
    return;
  }

  allSlides[currentSlideNumber].classList.remove("is-active");

  currentSlideNumber = indexAfterLoopingAround;

  allSlides[currentSlideNumber].classList.add("is-active");

  slideCounterNumberText.textContent = currentSlideNumber + 1;
}

function goToPreviousSlide() {
  showSlideByIndex(currentSlideNumber - 1);
}

function goToNextSlide() {
  showSlideByIndex(currentSlideNumber + 1);
}

previousArrowButton.addEventListener("click", goToPreviousSlide);
nextArrowButton.addEventListener("click", goToNextSlide);

document.addEventListener("keydown", function (keyboardEvent) {
  if (keyboardEvent.key === "ArrowLeft") {
    goToPreviousSlide();
  }
  if (keyboardEvent.key === "ArrowRight") {
    goToNextSlide();
  }
});
