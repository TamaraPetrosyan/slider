class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: number;
    public age:number;
    constructor(_firstName, _lastName, _email, _phone, _age){
        this.firstName= _firstName;
        this.lastName= _lastName;
        this.email= _email;
        this.phone= _phone;
        this.age=_age;
    }
}
let arr: User[]= [{
    firstName: "John",
    lastName: "Smith",
    email: "john@mail.ru",
    phone: 37491562354,
    age: 27
}];
let th: HTMLCollection = document.getElementsByTagName('th') as any;
for(let i=0; i<arr.length; i++){
    th[i].innerHTML= arr[i].firstName;
    th[i+1].innerHTML= arr[i].lastName;
    th[i+2].innerHTML= arr[i].email;
    th[i+3].innerHTML= arr[i].phone.toString();
    th[i+4].innerHTML= arr[i].age.toString(); 
}


console.log(arr);

 