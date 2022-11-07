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



const gb = document.querySelector('.header__burger');
const header = document.querySelector('.header');

gb.addEventListener('click',()=>{
header.classList.toggle('active');
})
