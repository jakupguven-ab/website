/* Reveal controller. Adds .js to <html> so reveals only hide when JS runs.
   When a .app scrolls into view, its .reveal descendants are staggered in
   (in document order) and then left in place. */
(function () {
  document.documentElement.classList.add("js");

  var STAGGER = 0.09; // seconds between each revealed element

  function play(app) {
    var items = app.querySelectorAll(".reveal");
    for (var i = 0; i < items.length; i++) {
      items[i].style.setProperty("--d", (i * STAGGER).toFixed(2) + "s");
    }
    app.classList.add("in");
  }

  function init() {
    var apps = document.querySelectorAll(".app");
    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < apps.length; i++) play(apps[i]);
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { play(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    apps.forEach(function (a) { io.observe(a); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
