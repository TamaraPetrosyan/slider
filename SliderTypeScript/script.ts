let req: XMLHttpRequest = new XMLHttpRequest();
req.open('GET', 'http://localhost:3000/images');
req.send();
req.onreadystatechange = function() {
  if (req.readyState === 4) {
      
      let data = JSON.parse(req.responseText);
      console.log(data);

let image = document.getElementsByTagName('img');
let i:number = 0;
  for(let elem = 0; elem <= data.length; elem++){
    image[elem].setAttribute('src', data[elem].img);
  } 
}
}
let slideIndex:number = 0;
let myTimer: any;
let slideshowContainer: any;

window.addEventListener("load",function():void {
  myTimer = setInterval(function(){plusSlides(1)}, 0);
    showSlides:void(slideIndex);
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause);
    slideshowContainer.addEventListener('mouseleave', resume);
})

function plusSlides(n:any):void{
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
 
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 2000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  }
}

function currentSlide(n:any):void{
  clearInterval(myTimer);
  myTimer = setInterval(function(){
    plusSlides(n + 1)
  }, 3000);
  showSlides(slideIndex = n);
}

function showSlides(n:any):void{
  let i:number =0;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i]['style'].display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1]['style'].display = "block";
  dots[slideIndex-1].className += " active";
}

let pause:any = () => {
    
    
  clearInterval(myTimer);
}

let resume:any = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
}
 
  
let toAboutPage:HTMLElement = document.getElementById('about') as HTMLElement;
let toHome:HTMLElement = document.getElementById('home') as HTMLElement;
let toContact:HTMLElement = document.getElementById('contact') as HTMLElement;
toHome.addEventListener('click', function(){
  window.location.assign('index1.html');
})
toAboutPage.addEventListener('click', function(){
  window.location.assign('aboutPage.html');
})
toContact.addEventListener('click', function(){
  window.location.assign('contactUs.html');
})

let form:HTMLFormElement = document.forms['user-form'] as HTMLFormElement;
let submit:any= document.getElementById('submit');
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

