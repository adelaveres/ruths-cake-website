import $ from 'jquery';


$(document).ready(function() {

    
    $(document).scroll(()=>{
        let header = $("header");
        header.css('z-index', '20');
        header.css('background-color','rgba(241, 245, 249, 0.95)');
    });

});