// let user1={
//     name:'john',
//     age:23,
//     greet(){
//         console.log("Hi",this.name)
//     }
// }
// user1.greet();// just to call method in object

// class User{
//      static numberofUsers=0
//     constructor(name,age){
//         // constructor method used to create instance variables
//         this.name=name;
//         this.age=age;
//         User.numberofUsers++
//     }
//     question(){
//         console.log(`hi ${this.name}.you are ${this.age} years old`)
//     }
    
//     static displayUsers(){
//         console.log(User.numberofUsers)
//     }
// }
// let user2 =new User('aju',21)
// let user3 =new User('aju',21)
// user2.question()
// it is object of class
// console.log(User.numberofUsers)
// User.displayUsers()

///-----------inheritance------
// inheritance is getting methods and constructor from base class

// class paidUser extends User{
//     constructor(name,age,storage){
//         super(name,age)
//         this.storage=storage;
//     }
//     msg(){
//         console.log(`hi ${this.name}.you can use ${this.storage}gb storage`)
//         return this
//     }
//     welcome(){
//         console.log(`thank you ${this.name}.come back soon`)
//     }
// }
// let paidUser1= new paidUser('ram',23,100)
// paidUser1.question()
// paidUser1.msg().welcome()
//--------PROTOTYPE INHERITANCe------
// function User(name,age){
//     this.name=name;
//     this.age=age;
//     this.login = function(){
//         console.log(`i am ${this.name}.i am ${this.age}`)
//     }
    
// }
//  let user1 =new User('abi',23)
//  user1.login()
//  in above CONSTRUCTOR function method is not inside prototype object
// function User(name,age){
//     this.name=name;
//     this.age=age;
// }
// User.prototype.login = function(){
//     console.log(`i am ${this.name}.i am ${this.age}`)
// }
// let user = new User('abi',34)
// in above method "PROTOTYPE" is used include function inside the prototype object
//---------GET,SET-----
// class Temperature{
//     constructor(temp){
//         this._temp=temp
//     }
//     get (temp) {
//         return this._temp;
//     }
// }
// let temp1 = new Temperature(23)


