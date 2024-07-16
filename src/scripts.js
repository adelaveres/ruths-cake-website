let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// var openFile = function() {
//   const file =  "/src/images/torturi/zile_nastere/20231014_130153.jpg";
//   let input = file.target;
//   let reader = new FileReader();
//   reader.onload = function(){
//     let dataURL = reader.result;
//     let output = document.getElementById('output-cake-img');
//     output.src = dataURL;
//   };
//   reader.readAsDataURL(input.files[0]);
// };
