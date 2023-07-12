// Typed
var typed = new Typed("#typed", {
  strings: [
    "Data Engineer",
    "Analytics Engineer",
    "Data Analyst",
    "BI Analyst",
  ],
  stringselement: null,
  typedSpeed: 20,
  startDelay: 150,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
  loopCount: 550,
  showCursor: true,
  cursorChar: "|",
  attr: null,
  contentTypeL: "html",
});

// MixitUp
var container = $(".mixitup");
mixitup(container);

// navtoggle
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".small-device").slideToggle();
  });
});
