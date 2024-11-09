import $ from 'jquery';


$(document).ready(function() {

    let right_arrows = Array.from($(".right-arrow-btn"));
    // let left_arrows = Array.from($(".left-arrow-btn"));
    let down_open_arrows = Array.from($(".down-open-btn"));
    // let down_close_arrows = Array.from($(".down-close-btn"));

    let cakes_photos = Array.from($(".left-side-card").find(".img-wrapper"));
    let modal = $(".modal")[0];
    let modalPhoto = $(modal).find("#imgModal")[0];
    let closeBtn = $(modal).find(".closebtn")[0];
    
    window.addEventListener('resize', handleResize);


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


    

    cakes_photos.forEach( photoWrapper => {

            let currPhoto = $(photoWrapper).find("img")[0];
            let currPhotoSrc = $(currPhoto).attr("src");
            
            photoWrapper.addEventListener('click', ()=>{
                // Open Modal
                modalPhoto.src = currPhotoSrc;
                modal.style.display = 'flex';
                console.log("photo clicked");

            });

            closeBtn.addEventListener('click', (event)=>{
                event.stopPropagation();
                // Close Modal
                modal.style.display = 'none';
                console.log("exit");
            });
    });



    down_open_arrows.forEach(down_arrow => {
        
        let arrow_card = $(down_arrow).parent(".card")[0];
        let side_info_card = $(arrow_card).find(".side-info")[0];
        let closing_arrow = $(arrow_card).find(".down-close-btn")[0];
        
        down_arrow.addEventListener('click', ()=>{
            
            side_info_card.style.display = 'block';
            closing_arrow.style.display = 'flex';
            down_arrow.style.display = 'none';
        });

        closing_arrow.addEventListener('click', ()=>{
            side_info_card.style.display = 'none';
            closing_arrow.style.display = 'none';
            down_arrow.style.display = 'flex';
        });
    });


   

    function handleResize() {
        let side_info_cards = Array.from($(".side-info"));
  
        side_info_cards.forEach(side_info_card => {

            let card = $(side_info_card).parent(".card")[0];
            let left_arrow = $(card).find(".left-arrow-btn")[0];
            let right_arrow = $(card).find(".right-arrow-btn")[0];
            let down_open_arrow = $(card).find(".down-open-btn")[0];
            let down_close_arrow = $(card).find(".down-close-btn")[0];

            if(side_info_card.style.display == "block"){    

                if(window.innerWidth <= 560){
                    left_arrow.style.display = "none";
                    right_arrow.style.display = "none";
                    down_open_arrow.style.display = "none";
                    down_close_arrow.style.display = "flex";
                }
                else{
                    left_arrow.style.display = "flex";
                    right_arrow.style.display = "none";
                    down_open_arrow.style.display = "none";
                    down_close_arrow.style.display = "none";
                }
                
            }
            else{
                if(window.innerWidth <= 560){
                    left_arrow.style.display = "none";
                    right_arrow.style.display = "none";
                    down_open_arrow.style.display = "flex";
                    down_close_arrow.style.display = "none";
                }
                else{
                    left_arrow.style.display = "none";
                    right_arrow.style.display = "flex";
                    down_open_arrow.style.display = "none";
                    down_close_arrow.style.display = "none";
                }
            }
        });
    }





});