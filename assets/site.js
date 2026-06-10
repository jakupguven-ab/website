/* Reveal controller for the page (.r) and the embedded kit components
   (.app / .reveal, staggered — same behaviour as kit/assets/reveal.js).
   Adds .js to <html> so content is only hidden when JS actually runs;
   prefers-reduced-motion is handled in CSS. */
(function () {
  document.documentElement.classList.add("js");

  var STAGGER = 0.09; // seconds between each revealed element inside a component

  function playApp(app) {
    var items = app.querySelectorAll(".reveal");
    for (var i = 0; i < items.length; i++) {
      items[i].style.setProperty("--d", (i * STAGGER).toFixed(2) + "s");
    }
    app.classList.add("in");
  }

  function init() {
    var rs = document.querySelectorAll(".r");
    var apps = document.querySelectorAll(".app");

    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < rs.length; i++) rs[i].classList.add("in");
      for (var j = 0; j < apps.length; j++) playApp(apps[j]);
      return;
    }

    var ioR = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    rs.forEach(function (el) { ioR.observe(el); });

    var ioApp = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { playApp(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    apps.forEach(function (a) { ioApp.observe(a); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
