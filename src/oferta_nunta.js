let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let cardsIndex = 2;

function showFirstCard(){
    cardsIndex = 1;
    option1.style.zIndex = 3;
    option2.style.zIndex = 2;
    option3.style.zIndex = 1;
    option1.style.backgroundColor = "#f1f5f9";
    option2.style.backgroundColor = "#9c9c9c";
    option3.style.backgroundColor = "#9c9c9c";
    option1.style.boxShadow = "0px 8px 16px 0px rgba(216, 226, 220, 1.3)";
    option2.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    option3.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
}
function showSecondCard(){
    cardsIndex = 2;
    option1.style.zIndex = 2;
    option2.style.zIndex = 3;
    option3.style.zIndex = 1;
    option1.style.backgroundColor = "#9c9c9c";
    option2.style.backgroundColor = "#f1f5f9";
    option3.style.backgroundColor = "#9c9c9c";
    option1.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    option2.style.boxShadow = "0px 8px 16px 0px rgba(216, 226, 220, 1.3)";
    option3.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
}

function showThirdCard(){
    cardsIndex = 3;
    option1.style.zIndex = 1;
    option2.style.zIndex = 2;
    option3.style.zIndex = 3;
    option1.style.backgroundColor = "#9c9c9c";
    option2.style.backgroundColor = "#9c9c9c";
    option3.style.backgroundColor = "#f1f5f9";
    option1.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    option2.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    option3.style.boxShadow = "0px 8px 16px 0px rgba(216, 226, 220, 1.3)";
}

option1.addEventListener('click', showFirstCard);
option2.addEventListener('click', showSecondCard);
option3.addEventListener('click', showThirdCard);

// Next & Prev arrows

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener('click',()=>{
    switch(cardsIndex){
        case 2: showThirdCard(); break;
        case 3: showFirstCard(); break;
        default: showSecondCard();
    }

});
prevBtn.addEventListener('click',()=>{
    switch(cardsIndex){
        case 1: showThirdCard(); break;
        case 2: showFirstCard(); break;
        default: showSecondCard();
    }
});
