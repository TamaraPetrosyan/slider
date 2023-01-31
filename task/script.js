var User = /** @class */ (function () {
    function User(_firstName, _lastName, _email, _phone, _age) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.email = _email;
        this.phone = _phone;
        this.age = _age;
    }
    return User;
}());
var arr = [{
        firstName: "John",
        lastName: "Smith",
        email: "john@mail.ru",
        phone: 37491562354,
        age: 27
    }];
var th = document.getElementsByTagName('th');
for (var i = 0; i < arr.length; i++) {
    th[i].innerHTML = arr[i].firstName;
    th[i + 1].innerHTML = arr[i].lastName;
    th[i + 2].innerHTML = arr[i].email;
    th[i + 3].innerHTML = arr[i].phone.toString();
    th[i + 4].innerHTML = arr[i].age.toString();
}
console.log(arr);
