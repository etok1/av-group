document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animated");

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
});
