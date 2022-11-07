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
