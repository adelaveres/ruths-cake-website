let slideIndex = 0;
let slides = document.getElementsByClassName("slide-item");
let dots = document.getElementsByClassName("dot");
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

//Add prevBtn, nextBtn listeners
let prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener('click', ()=>{
  plusSlides(-1);
});

let nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener('click', ()=>{
  plusSlides(1);
});

//Add dots listeners
for (let i = 0; i < dots.length; i++){
  dots[i].addEventListener('click',()=>{
    currentSlide(i+1);
  });
}

function showSlide(n) {
  let i;
  //Hide all photos
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Deactivate all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

function showSlides() {
  slideIndex++;
  showSlide(slideIndex);
  setTimeout(showSlides, 3800);
  
  
}

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide-item");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1
//   }
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4500); // Change image every 5 seconds
// }



