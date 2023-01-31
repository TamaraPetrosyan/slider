function usersData(){
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
} 
export {usersData};