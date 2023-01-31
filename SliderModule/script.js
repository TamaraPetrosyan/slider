
import {request} from "./GETrequest.js";
import {usersData} from "./POSTrequest.js";

request();
let slideIndex = 1;
let myTimer;
let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 2000);
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause);
    slideshowContainer.addEventListener('mouseleave', resume);
})

function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
 
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 1000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  }
}

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){
    plusSlides(n + 1)
  }, 3000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

 let pause = () => {
  clearInterval(myTimer);
}

let resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 2000);
}
 
  
let toAboutPage = document.getElementById('about');
let toHome = document.getElementById('home');
let toContact = document.getElementById('contact');
toHome.addEventListener('click', function(){
  window.location.assign('index1.html');
})
toAboutPage.addEventListener('click', function(){
  window.location.assign('aboutPage.html');
})
toContact.addEventListener('click', function(){
  window.location.assign('contactUs.html');
})
usersData();


