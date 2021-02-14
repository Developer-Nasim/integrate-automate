 "use strict"
 
// menu 
$('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


let loader = document.querySelector('.prealoder-area')
window.addEventListener('load', () => {
    loader.classList.add('none');
    setTimeout(() => {
        AOS.init();
    }, 1000);
})
 