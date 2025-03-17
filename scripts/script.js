document.addEventListener("DOMContentLoaded", function () {
  const hiddenSections = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
              }
          });
      },
      { threshold: 0.2 }
  );

  hiddenSections.forEach((section) => {
      observer.observe(section);
  });
});