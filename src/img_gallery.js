import $ from 'jquery';


$(document).ready(function() {
    let anivPhotos = $(".torturi-aniversare").find(".img-wrapper");


    for (let i = 0; i < anivPhotos.length; i++){

        let currPhoto = anivPhotos[i];
        
        currPhoto.addEventListener('click', ()=>{
        
            let currPhotoSrc = $(currPhoto).find("img").attr("src");
            let modalWindow = $(currPhoto).find(".modal")[0];
            let modalPhoto = $(modalWindow).find("#imgModal")[0];
            modalPhoto.src = currPhotoSrc;
            
            // Open Modal
            modalWindow.style.display = 'block';
        
            let closeBtn = $(modalWindow).find(".closebtn")[0];

            closeBtn.addEventListener('click', ()=>{
                // Close Modal
                currPhoto.style.display = 'none';
            });
        
        });

        

        


    }

});
