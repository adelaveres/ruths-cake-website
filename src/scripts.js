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

// Hamburger Menu

let hamburger = document.getElementById("hamburger");
let overlay = document.getElementById("overlay-screen");
let closeBtn = document.getElementById("closebtn");

hamburger.addEventListener('click', openHambMenu); 
closeBtn.addEventListener('click', closeHambMenu);

function openHambMenu(){
  overlay.style.display = 'block';
}

function closeHambMenu(){
  overlay.style.display = 'none';
}

