import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';



window.onload = function(){
let preloader = document.getElementById("preloader");
preloader.classList.add("hide-preloader")
setInterval(function(){
  preloader.classList.add("hide-preloader")
},2)
}


/** Не стал этот код использовать для бургера */
const gb = document.querySelector('.header__burger');
const header = document.querySelector('.header');

gb.addEventListener('click',()=>{
header.classList.toggle('active');
})


/** анимация для ссылок */
  // Smooth scroll for the navigation and links with .scrollto classes
  $('.nav-link').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });


