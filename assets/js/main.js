 "use strict"
 
// menu 
$('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


let loader = document.querySelector('.prealoder-area')
let cbtn   = document.querySelectorAll('.contact-btn')
let ctSec  = document.querySelector('.contact-area')
window.addEventListener('load', () => {
    loader.classList.add('none');
    setTimeout(() => {
        AOS.init();
    }, 1000);

    contactSection();
})
 
function contactSection(e){
    console.log(e)
    cbtn.forEach(cgct => {
        cgct.addEventListener('click', () => {
            let a = 0;
            setInterval(() => {
                if (a >= ctSec.offsetTop) {
                    a = ctSec.offsetTop
                }else{ 
                    document.documentElement.scrollTop = a;
                    a = 10 + a++;
                }
            }, 1);
        })
    })
}