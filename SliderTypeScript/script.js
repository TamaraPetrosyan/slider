var req = new XMLHttpRequest();
req.open('GET', 'http://localhost:3000/images');
req.send();
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        var data = JSON.parse(req.responseText);
        console.log(data);
        var image = document.getElementsByTagName('img');
        var i = 0;
        for (var elem = 0; elem <= data.length; elem++) {
            image[elem].setAttribute('src', data[elem].img);
        }
    }
};
var slideIndex = 0;
var myTimer;
var slideshowContainer;
window.addEventListener("load", function () {
    myTimer = setInterval(function () { plusSlides(1); }, 0);
    showSlides: void (slideIndex);
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    slideshowContainer.addEventListener('mouseenter', pause);
    slideshowContainer.addEventListener('mouseleave', resume);
});
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    }
    else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function () { plusSlides(n + 2); }, 2000);
    }
    else {
        myTimer = setInterval(function () { plusSlides(n + 1); }, 2000);
    }
}
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        plusSlides(n + 1);
    }, 3000);
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i]['style'].display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1]['style'].display = "block";
    dots[slideIndex - 1].className += " active";
}
var pause = function () {
    clearInterval(myTimer);
};
var resume = function () {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(slideIndex); }, 3000);
};
var toAboutPage = document.getElementById('about');
var toHome = document.getElementById('home');
var toContact = document.getElementById('contact');
toHome.addEventListener('click', function () {
    window.location.assign('index1.html');
});
toAboutPage.addEventListener('click', function () {
    window.location.assign('aboutPage.html');
});
toContact.addEventListener('click', function () {
    window.location.assign('contactUs.html');
});
var form = document.forms['user-form'];
var submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    var users = {
        "first-name": form['first-name'].value,
        "last-name": form['last-name'].value,
        "email": form['email'].value,
        "message": form['message'].value
    };
    var req = new XMLHttpRequest();
    var url = 'http://localhost:3000/users';
    req.open('POST', 'http://localhost:3000/users');
    req.setRequestHeader('Content-type', 'application/json');
    req.send(JSON.stringify(users));
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            console.log(JSON.parse(req.responseText));
        }
    };
});
