let slideIndex = 1;

slideShow(slideIndex);

// whatever the current slide is , when hover on the dots, imgage will go to that side
function currentSlide(n) {
  slideShow((slideIndex = n));
  console.log(slideIndex);
}

// handling the previous and next file;
function plusSlide(n) {
  // slide increment;
  slideShow((slideIndex += n));
}

function slideShow(n) {
  // select all the slides
  const slides = document.querySelectorAll(".slide");
  // all the dots
  const dots = document.querySelectorAll(".dot");

  // if images reach at the last , start the loop form starting
  if (n > slides.length) slideIndex = 1;
  // if images reach to the begining , start from first;
  if (n < 1) slideIndex = slides.length - 1;

  // reomve all the imgaes and displayed of icons
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // romove all the active classes;
  for (let j = 0; j < dots.length; j++) {
    dots[j].classList.remove("active");
  }

  // only  one images should see;
  slides[slideIndex - 1].style.display = "block";
  //   only one block sholud have active class
  dots[slideIndex - 1].classList.add("active");
}
