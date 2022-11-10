import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';
let preloader = document.getElementById("preloader");



window.onload = function(){
  preloader.classList.remove('preloader-off')
setInterval(function(){
  preloader.classList.add("hide-preloader")
  preloader.classList.remove('preloader-off')
},500)
}


/** Не стал этот код использовать для бургера */
const gb = document.querySelector('.header__burger');
const header = document.querySelector('.header');

gb.addEventListener('click',()=>{
header.classList.toggle('active');
})


/** анимация для ссылок */
$("a.nav-link").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});


new WOW().init();
