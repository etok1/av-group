function automaticSlider(slider) {
  const slides = slider.querySelectorAll(".slides");
  const arrows = slider.querySelectorAll(".main__products-arrow");
  const allSlides = slides.length;
  let activeSlide = 0;
  setInterval(() => {
    slides[activeSlide].classList.remove("active");
    arrows[activeSlide].classList.remove("active");
    activeSlide++;
    if (activeSlide === allSlides) {
      activeSlide = 0;
    }

    slides[activeSlide].classList.add("active");
    arrows[activeSlide].classList.add("active");
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const slider1 = document.getElementById("slider1");
  const slider2 = document.getElementById("slider2");

  if (slider1) {
    automaticSlider(slider1);
  }

  if (slider2) {
    automaticSlider(slider2);
  }
});
