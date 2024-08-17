let slideIndexC = 0;
let slidesC = document.getElementsByClassName("slide-item-candybar");

showSlidesC();

// Next/previous controls
function plusSlidesC(n) {
  showSlideC(slideIndexC += n);
}

// Thumbnail image controls
function currentSlideC(n) {
  showSlideC(slideIndexC = n);
}

//Add prevBtn, nextBtn listeners
let prevBtnC = document.getElementById("candybar-prevBtn");
prevBtnC.addEventListener('click', ()=>{
  plusSlidesC(-1);
});

let nextBtnC = document.getElementById("candybar-nextBtn");
nextBtnC.addEventListener('click', ()=>{
  plusSlidesC(1);
});

function showSlideC(n) {
  let i;
  //Hide all photos
  for (i = 0; i < slidesC.length; i++) {
    slidesC[i].style.display = "none";
  }
  
  if (n > slidesC.length) {slideIndexC = 1}
  if (n < 1) {slideIndexC = slidesC.length}

  slidesC[slideIndexC-1].style.display = "block";

}

function showSlidesC() {
  slideIndexC++;
  showSlideC(slideIndexC);
  setTimeout(showSlidesC, 3800);
  
  
}
