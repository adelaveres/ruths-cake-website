
import $ from 'jquery';


$(document).ready(function() {

    let right_arrows = Array.from($(".right-arrow-btn"));

    right_arrows.forEach(arrow => {
        
        let arrow_card = $(arrow).parent(".card")[0];
        let side_info_card = $(arrow_card).find(".side-info")[0];
        let closing_arrow = $(arrow_card).find(".left-arrow-btn")[0];
        
        arrow.addEventListener('click', ()=>{
            side_info_card.style.display = 'block';
            closing_arrow.style.display = 'flex';
            arrow.style.display = 'none';
        });

        closing_arrow.addEventListener('click', ()=>{
            side_info_card.style.display = 'none';
            closing_arrow.style.display = 'none';
            arrow.style.display = 'flex';
        });
    });


});