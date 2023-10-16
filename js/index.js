const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const portfolioItem = document.querySelectorAll(".portfolio__item");
// To animate the intersection elements coming on screen
const stationaryHiddenElements =
  document.querySelectorAll(".stationary-hidden");
const transformingHiddenElements = document.querySelectorAll(
  ".transforming-hidden"
);

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

portfolioItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.innerHTML;
  });
});

const stationaryObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("stationary-show");
    } else {
      entry.target.classList.remove("stationary-show");
    }
  });
});
stationaryHiddenElements.forEach((el) => stationaryObserver.observe(el));

const transformingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("transforming-show");
    } else {
      entry.target.classList.remove("transforming-show");
    }
  });
});
transformingHiddenElements.forEach((el) => transformingObserver.observe(el));

// to animate the icon
var cursor = document.getElementById("cursor_1");
var cursorShift = true;
document.addEventListener("mousemove", function (e) {
  cursorShift = !cursorShift;
  if (cursorShift) {
    cursor.style.top = e.clientY + 12 + "px";
    cursor.style.left = e.clientX + 12 + "px";
  } else {
    cursor.style.top = e.clientY - 12 + "px";
    cursor.style.left = e.clientX - 12 + "px";
  }
});

var cursor2 = document.getElementById("cursor_2");
var cursor2shift = true;
document.addEventListener("mousemove", function (e) {
  cursor2Shift = !cursor3shift;
  if (cursor2Shift) {
    cursor2.style.top = e.clientY + 4 + "px";
    cursor2.style.left = e.clientX + 4 + "px";
  } else {
    cursor2.style.top = e.clientY - 4 + "px";
    cursor2.style.left = e.clientX - 4 + "px";
  }
});

var cursor3 = document.getElementById("cursor_3");
var cursor3shift = true;
document.addEventListener("mousemove", function (e) {
  cursor3shift = !cursor3shift;
  if (cursor3shift) {
    cursor3.style.top = e.clientY + 2 + "px";
    cursor3.style.left = e.clientX + 2 + "px";
  } else {
    cursor3.style.top = e.clientY - 2 + "px";
    cursor3.style.left = e.clientX - 2 + "px";
  }
});

var cursor4 = document.getElementById("cursor_4");
var cursor4shift = true;
document.addEventListener("mousemove", function (e) {
  cursor4shift = !cursor4shift;
  if (cursor4shift) {
    cursor4.style.top = e.clientY + 14 + "px";
    cursor4.style.left = e.clientX + 14 + "px";
  } else {
    cursor4.style.top = e.clientY - 14 + "px";
    cursor4.style.left = e.clientX - 14 + "px";
  }
});

var cursor5 = document.getElementById("cursor_5");
var cursor5shift = true;
document.addEventListener("mousemove", function (e) {
  cursor5shift = !cursor5shift;
  if (cursor5shift) {
    cursor5.style.top = e.clientY + 16 + "px";
    cursor5.style.left = e.clientX + 16 + "px";
  } else {
    cursor5.style.top = e.clientY - 16 + "px";
    cursor5.style.left = e.clientX - 16 + "px";
  }
});

var timeout;
document.onmousemove = function () {
  var cursor = document.getElementById("cursor_1");
  var cursor2 = document.getElementById("cursor_2");
  var cursor3 = document.getElementById("cursor_3");
  var cursor4 = document.getElementById("cursor_4");
  var cursor5 = document.getElementById("cursor_5");

  cursor.classList.remove("rotate");
  cursor2.classList.remove("rotate");
  cursor3.classList.remove("rotate");
  cursor4.classList.remove("rotate");
  cursor5.classList.remove("rotate");

  clearTimeout(timeout);
  timeout = setTimeout(function () {
    cursor.classList.add("rotate");
    cursor2.classList.add("rotate");
    cursor3.classList.add("rotate");
    cursor4.classList.add("rotate");
    cursor5.classList.add("rotate");
  }, 170);
};
