function request(){
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
}
export {request};