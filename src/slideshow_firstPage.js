let slideIndex = 0;
let slides = document.getElementsByClassName("slide-item");
// let dots = document.getElementsByClassName("dot");
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
// for (let i = 0; i < dots.length; i++){
//   dots[i].addEventListener('click',()=>{
//     currentSlide(i+1);
//   });
// }

function showSlide(n) {
  let i; 
  //Hide all photos
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Deactivate all dots
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // slides[slideIndex-1].style.display = "block";
  let currentSlide = slides[slideIndex-1];
  $(currentSlide).fadeIn(800).delay(3100).fadeOut(800);
  // dots[slideIndex-1].className += " active";

}

function showSlides() {
  slideIndex++;
  showSlide(slideIndex);
  setTimeout(showSlides, 4700);
  
  
}

function setInitialSlidePhotos(){
  
  
  if(window.innerWidth <= 600){
    wedPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/wed_cake_slideshow.jpeg";
    cakesPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/wed_cake_example_slideshow_cut.jpeg";
    candybarPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/candybar_slideshow_cut.jpeg";
    annivPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/tort_ursulet_artificii.jpeg";
    specialPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/special_cakes_cut.jpg";
  }else
  if(window.innerWidth < 840){
    cakesPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/medium_screen_slideshow/wed_cake_collage_medium_screen.jpg";
    annivPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/medium_screen_slideshow/birthday_collage_medium_screen.jpg";
    specialPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/medium_screen_slideshow/special_collage_medium_screen.jpg";
  }else if(window.innerWidth < 970){
    cakesPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/medium_screen_slideshow/wed_cake_collage_medium_screen.jpg";

      
  }
}

function handleResizeScreen(){
  

  if(window.innerWidth < 600){
    
    wedPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/wed_cake_slideshow.jpeg";
    cakesPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/wed_cake_example_slideshow_cut.jpeg";
    candybarPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/candybar_slideshow_cut.jpeg";
    annivPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/tort_ursulet_artificii.jpeg";
    specialPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/mobile_slideshow/special_cakes_cut.jpg";
  
  }else
  if(window.innerWidth < 840){
    // reset
    wedPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/wed_collage7.jpg";
    candybarPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/candybar_collage2.jpg";
    //
    cakesPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/medium_screen_slideshow/wed_cake_collage_medium_screen.jpg";
    annivPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/medium_screen_slideshow/birthday_collage_medium_screen.jpg";
    specialPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/medium_screen_slideshow/special_collage_medium_screen.jpg";
  }
  else if(window.innerWidth < 970){
    // reset
    wedPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/wed_collage7.jpg";
    candybarPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/candybar_collage2.jpg";
    annivPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/birthday_collage_res.jpg";
    specialPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/special_ocasions_collage_res.jpg";
    //
    cakesPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/medium_screen_slideshow/wed_cake_collage_medium_screen.jpg";   
  }
  else{
    //reset all
    wedPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/wed_collage7.jpg";
    candybarPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/candybar_collage2.jpg";
    annivPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/birthday_collage_res.jpg";
    specialPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/special_ocasions_collage_res.jpg";
    cakesPhoto.src = "https://adela-maris.sirv.com/Images/Adina_website/slideshow_homepage/wed_cake_collage_res.jpg";  
  }
}
  
  




