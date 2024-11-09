import $ from 'jquery';

  
$(document).ready(function() {
    let anivPhotos = Array.from($(".torturi-aniversare").find(".img-wrapper"));
    let baptPhotos = Array.from($(".torturi-botez").find(".img-wrapper"));
    let majPhotos = Array.from($(".torturi-majorate").find(".img-wrapper"));
    let casPhotos = Array.from($(".torturi-caserola").find(".img-wrapper"));
    addEventListenerToElements(anivPhotos);
    addEventListenerToElements(baptPhotos);
    addEventListenerToElements(majPhotos);
    addEventListenerToElements(casPhotos);
 

    function addEventListenerToElements (elements){

        elements.forEach(currPhotoWrapper => {

            let currPhoto = $(currPhotoWrapper).find("img")[0];
            let currPhotoSrc = $(currPhoto).attr("src");
            let modalWindow = $(currPhotoWrapper).find(".modal")[0];
            let modalPhoto = $(modalWindow).find("#imgModal")[0];
            modalPhoto.src = currPhotoSrc;
            let closeBtn = $(modalWindow).find(".closebtn")[0];

            currPhotoWrapper.addEventListener('click', ()=>{
                // Open Modal   
                modalWindow.style.display = 'block';
            });

            closeBtn.addEventListener('click', (event)=>{
                event.stopPropagation();
                // Close Modal
                modalWindow.style.display = 'none';
            });
        });
    }

});
