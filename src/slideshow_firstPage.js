let slideIndex = 0;
let slides = document.getElementsByClassName("slide-item");
let dots = document.getElementsByClassName("dot");
showSlides();
window.addEventListener('resize', handleResizeScreen);
let wedPhoto = document.getElementById("wed-img");
let cakesPhoto = document.getElementById("cakes-img");
let candybarPhoto = document.getElementById("candybar-img");
let annivPhoto = document.getElementById("anniv-img");
let specialPhoto = document.getElementById("special-img");
setInitialSlidePhotos();


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

  // slides[slideIndex-1].style.display = "block";
  let currentSlide = slides[slideIndex-1];
  $(currentSlide).fadeIn(2000).delay(3200).fadeOut(800);
  dots[slideIndex-1].className += " active";

}

function showSlides() {
  slideIndex++;
  showSlide(slideIndex);
  setTimeout(showSlides, 6000);
  
  
}

function setInitialSlidePhotos(){
  
  
  if(window.innerWidth < 600){
    wedPhoto.src = "/images/slideshow/20230826_235904_2.jpg";
    cakesPhoto.src = "/images/slideshow/20240511_174947.jpg";
    candybarPhoto.src = "/images/slideshow/candybar_hero_photo.jpg";
    annivPhoto.src = "/images/slideshow/20220804_232443.jpg";
    specialPhoto.src = "/images/slideshow/20240621_083605.jpg";
  }else
  if(window.innerWidth < 840){
    cakesPhoto.src = "/images/slideshow/wed_cake_collage_medium_screen.jpg";
    annivPhoto.src = "/images/slideshow/birthday_collage_medium_screen.jpg";
    specialPhoto.src = "/images/slideshow/special_collage_medium_screen.jpg";
  }else if(window.innerWidth < 970){
    cakesPhoto.src = "/images/slideshow/wed_cake_collage_medium_screen.jpg";

      
  }
}

function handleResizeScreen(){
  

  if(window.innerWidth < 600){
    
    wedPhoto.src = "/images/slideshow/20230826_235904_2.jpg";
    cakesPhoto.src = "/images/slideshow/20240511_174947.jpg";
    candybarPhoto.src = "/images/slideshow/candybar_hero_photo.jpg";
    annivPhoto.src = "/images/slideshow/20220804_232443.jpg";
    specialPhoto.src = "/images/slideshow/20240621_083605.jpg";
  
  }else
  if(window.innerWidth < 840){
    // reset
    wedPhoto.src = "/images/slideshow/wed_collage7.jpg";
    candybarPhoto.src = "/images/slideshow/candybar_collage2.jpg";
    //
    cakesPhoto.src = "/images/slideshow/wed_cake_collage_medium_screen.jpg";
    annivPhoto.src = "/images/slideshow/birthday_collage_medium_screen.jpg";
    specialPhoto.src = "/images/slideshow/special_collage_medium_screen.jpg";
  }
  else if(window.innerWidth < 970){
    // reset
    wedPhoto.src = "/images/slideshow/wed_collage7.jpg";
    candybarPhoto.src = "/images/slideshow/candybar_collage2.jpg";
    annivPhoto.src = "/images/slideshow/birthday_collage_res.jpg";
    specialPhoto.src = "/images/slideshow/special_ocasions_collage_res.jpg";
    //
    cakesPhoto.src = "/images/slideshow/wed_cake_collage_medium_screen.jpg";   
  }
  else{
    //reset all
    wedPhoto.src = "/images/slideshow/wed_collage7.jpg";
    candybarPhoto.src = "/images/slideshow/candybar_collage2.jpg";
    annivPhoto.src = "/images/slideshow/birthday_collage_res.jpg";
    specialPhoto.src = "/images/slideshow/special_ocasions_collage_res.jpg";
    cakesPhoto.src = "/images/slideshow/wed_cake_collage_res.jpg";  
  }
}
  
  




