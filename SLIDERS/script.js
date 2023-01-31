let req = new XMLHttpRequest();
req.open('GET', 'http://localhost:3000/images');
req.send();
req.onreadystatechange = function() {
  if (req.readyState === 4) {
      
      let data = JSON.parse(req.responseText);
      console.log(data);

let image = document.getElementsByTagName('img');
  
console.log(image);
let i = 0;

  for(let elem = 0; elem < data.length; elem++){
    image[elem].setAttribute('src', data[elem].img);
  }
  
}
}
let slideIndex = 1;
let myTimer;
let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 3000);
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
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
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

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
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
  window.location.assign('contact.html');
})

let form = document.forms['user-form'];
let submit= document.getElementById('submit');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    let users = {
        "first-name": form['first-name'].value,
        "last-name": form['last-name'].value,
        "email": form['email'].value,
        "message": form['message'].value
    }
    let req = new XMLHttpRequest();
    let url = 'http://localhost:3000/users';
    req.open('POST', 'http://localhost:3000/users');
    req.setRequestHeader('Content-type', 'application/json');
    req.send(JSON.stringify(users));
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
      console.log(JSON.parse(req.responseText));
      }
    }
})

