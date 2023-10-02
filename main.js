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

// Some code here I have yet to figure out. 
// Currently needs two clicks when the slideshow changes direction. 

function showSlidesPrevious() { 
  let i;
  let slides = document.getElementsByClassName("slideshow__image");

  if (slideIndex <= 0) {
    slideIndex = slides.length -1;
  } else {
     slideIndex--;
    }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "block";
}