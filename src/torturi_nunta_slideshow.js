let slideIndexTorturi = 0;
let slidesTorturi = document.getElementsByClassName("slide-item-torturi");

showSlidesCakes();

// Next/previous controls
function plusSlidesCakes(n) {
  showSlideCakes(slideIndexTorturi += n);
}

// Thumbnail image controls
function currentSlideCakes(n) {
  showSlideCakes(slideIndexTorturi = n);
}

//Add prevBtn, nextBtn listeners
let prevBtn = document.getElementById("wed-cake-prevBtn");
prevBtn.addEventListener('click', ()=>{
  plusSlidesCakes(-1);
});

let nextBtn = document.getElementById("wed-cake-nextBtn");
nextBtn.addEventListener('click', ()=>{
  plusSlidesCakes(1);
});


function showSlideCakes(n) {
  let i;
  //Hide all photos
  for (i = 0; i < slidesTorturi.length; i++) {
    slidesTorturi[i].style.display = "none";
  }

  if (n > slidesTorturi.length) {slideIndexTorturi = 1}
  if (n < 1) {slideIndexTorturi = slidesTorturi.length}

  slidesTorturi[slideIndexTorturi-1].style.display = "block";

}

function showSlidesCakes() {
  slideIndexTorturi++;
  showSlideCakes(slideIndexTorturi);
  setTimeout(showSlidesCakes, 3800); 
   
}



