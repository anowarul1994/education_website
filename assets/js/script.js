
// change navbar styles on scroll

window.addEventListener('scroll', () =>{
     document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >0)
});

// show/hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
     faq.addEventListener('click', () => {
               

          
         
          
          faq.classList.toggle('open');
          // change icon
          const icon = faq.querySelector('.faq_icon i');

          if(icon.className === 'bx bx-plus'){
               icon.className = "bx bx-minus"
          }else{
              icon.className="bx bx-plus"
          }
     });
})


//Testimonial Slider

var swiper = new Swiper(".mySwiper", {
     slidesPerView: 1,
     spaceBetween: 30,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     // when window width >= 600px
     breakpoints:{
          600:{
               slidesPerView: 2
          }
     }

   });

// show/hide nav menu

const menu = document.querySelector(".nav_menu");
const openBtn = document.querySelector("#open-menu-icon");
const closeBtn = document.querySelector("#close-menu-icon");

openBtn.addEventListener('click', () => {
     menu.style.display = "flex";
     closeBtn.style.display = "inline-block"
     openBtn.style.display = "none"
})
closeBtn.addEventListener('click', () => {
     menu.style.display = "none";
     closeBtn.style.display = "none"
     openBtn.style.display = "inline-block"
})