console.log("yo");
var total = 0;
var personer = 0;

function antalPersoner(antal)
{
  personer = antal;
  console.log(personer);

  add(0);
}

function add(cost)
{
  total += cost;
  console.log(total);

  var pris =   document.querySelector(".showprice");
  console.log(pris);
  if(personer != 0)
  {
      pris.innerHTML = "Din pris er: " + total + " (Eller " + total/personer + " per person)";
  }
  else
  {
      pris.innerHTML = "Din pris er: " + total;
  }
}



//SLIDESHOW STUFF \/\/\/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
