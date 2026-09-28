// Fades case study sections in as they scroll into view.
// Pages opt in with a `js` class on <html> (set inline in <head>), so sections
// are only hidden once this script is guaranteed to run. See .reveal in styles.css.
(function () {
  var sections = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(el) {
    el.classList.add("is-visible");
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    sections.forEach(show);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px" }
  );

  sections.forEach(function (el) {
    observer.observe(el);
  });
})();
