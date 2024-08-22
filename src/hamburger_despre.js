// Hamburger Menu

let hamburgerD = document.getElementById("hamburger");
let overlayD = document.getElementById("overlay-screen");
let closeBtnD = document.getElementById("closebtn");

hamburgerD.addEventListener('click', openHambMenuD); 
closeBtnD.addEventListener('click', closeHambMenuD);

function openHambMenuD(){
  overlay.style.display = 'block';
}

function closeHambMenuD(){
  overlay.style.display = 'none';
}
