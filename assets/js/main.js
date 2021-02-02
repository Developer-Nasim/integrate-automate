 "use strict"



let loader = document.querySelector('.prealoder-area')
window.addEventListener('load', () => {
    loader.classList.add('none');
})






// menu 
$('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


 AOS.init();