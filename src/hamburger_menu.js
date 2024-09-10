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