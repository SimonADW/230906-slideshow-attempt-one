const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

let slideIndex = 0;
showSlidesNext();

nextButton.addEventListener("click", showSlidesNext);

function showSlidesNext() {
  let i;
  let slides = document.getElementsByClassName("slideshow__image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// Function for previous button // 

previousButton.addEventListener("click", showSlidesPrevious);

function showSlidesPrevious() {
	// some code here I have yet to figure out //
}