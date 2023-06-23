//---------------Asynchoronous-------
// console.log("hi");
// setTimeout(()=> console.log("one"),5000)
// setTimeout(()=> console.log("two"),1000)
// setTimeout(()=> console.log("three"),3000)
// to clear Interval ---> clearInterval()
// console.log("bye")
// setInterval(() => console.log("interval"),2000)
// to clear timeout ---> clearTimeout()

// setTimeout(()=>console.log('step1'),3000)//f6
// setTimeout(()=>console.log('step2'),2000)//f7
// setTimeout(()=>console.log('step3'),1000)//f8

// console.log('bye')//f9

// setInterval(()=>console.log("Hi.."),2000)

// ------Js promise------ src:https://www.youtube.com/watch?v=_aQp_daNR3I&t=3s
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is a proxy for a value not necessarily known when the promise is created.
// It allows you to associateandlers with an asynchronous action's eventual success value or failure reason. 
 
// to call a promise object

// const result = new Promise((resolve,reject) =>{
//     let csk = true;
//     if(csk){
//         resolve()
//     } else {
//         reject()
//     }
// })
//    result
//  .then(() => console.log("congrats!csk wins"))
// .catch(() =>  console.log('sorry csk lost'))

// to call a promise as function

// function movieticket () {
//     return new Promise((resolve,reject) => {
//         let ticketavail = false;

//         if(ticketavail){
//             resolve(189)
//         }else{
//             reject()
//         }
//     })
// }
// movieticket()
// .then((price) => console.log(`the ticket price of ${price} has sent`))
// .catch(() => console.log("the show is housefull"))
// ------------XXXXXXXXXXXXXXXXXX------------

//              Promise.all()
// it means when every promise resolves it shows , 
// else if any of promises rejected it will show rejected

// let partyA = new Promise((resolve,reject) =>{
    
//     let home = true;
//     if(home){
//         // resolve("rahim reached home safely")
//         setTimeout(resolve,5000,"rahim reached home safely")
//     }else{
//         reject("not reached")
//     }
// })

// let partyB = new Promise((resolve,reject) =>{
    
//     let home = false;
//     if(home){
//         // resolve("ram reached home safely")
//         setTimeout(resolve,2000,"ram reached home safely");
//     }else{
//         reject("not reached")
//     }
// })

// let partyC = new Promise((resolve,reject) =>{
//     let home = true;
//     if(home){
//         // resolve("abi reached home safely")
//         setTimeout(resolve,4000,"abi reached home safely");
//     }else{
//         reject("not reached")
//     }
// })
// Promise.all([partyA,partyB,partyC])
// .then((msg)=> console.log(msg))
// .catch((msg) => console.log(msg))
// ------------XXXXXXXXXXXXXXXXXX------------

//              Promise.allSettled()
// if all of promises settled (i.e.either resolve or reject)
//  it will shown in array of objects
// Promise.allSettled([partyA,partyB,partyC])
// .then((msg)=> console.log(msg))
// .catch((msg) => console.log(msg))
// ------------XXXXXXXXXXXXXXXXXX------------

// Promise.any()
 // if any one of promises fullfilled(resolved) it will show
// Promise.any([partyA,partyB,partyC])
// .then((msg)=> console.log(msg))
// .catch((msg) => console.log(msg))
// ------------XXXXXXXXXXXXXXXXXX------------

// Promise.race()
// if any one of promises settled() then it shows its result
// Promise.race([partyA,partyB,partyC])
// .then((msg)=> console.log(msg))
// .catch((msg) => console.log(msg))

// ------------XXXXXXXXXXXXXXXXXX------------

// error handling error throw and catch
// const num = prompt("enter number")
// try{
//     if(isNaN(num)){
//         throw "input must be a number"
//     }
//     if(num==''){
//         throw "give me a number"
//     }
//     console.log(num)
// }
// catch(error){console.log(error)} 
// finally{
//     console.log("bye")
// }

// ------------XXXXXXXXXXXXXXXXXX------------
//     async await function

// function trainonboard(){
//     return new Promise((resolve,reject) =>{
        
//         istraincatched = false;
//         if(istraincatched){
//             setTimeout(resolve,3000,"i am on boarded  train successfully")
//         }else{
//             reject("i missed the train")
//         }
//     })
// }
// // trainonboard()
// // .then((msg) => console.log(msg))
// // .catch((msg) => console.log(msg))

// // promise function

// // async is used to return promises
// async function fn () {
//     try{
//         res = await trainonboard()
//         console.log(res)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// fn()
///------------JSON--------

// let json1= "arjun"
// let json2=`[
//     {"name":"audi",
// "model":2011,
// "fuel":"petrol",
// "seats":5},
// {"name":"bmw",
// "model":2021,
// "fuel":"diesel",
// "seats":4}]`
// // console.log(json2)
// let parsed = JSON.parse(json2)
// console.log(parsed[0].seats)
// //to take a particular value use json 
// // to convert json object into string
// console.log(JSON.stringify(parsed))
//--------FETCH API-------
// fetch('http://universities.hipolabs.com/search?name=middle&country=turkey')
// .then((res)=>console.log(res.json()))
// .then((msg) => console.log(msg[0].country))
// .catch((error)=> console.log(error))

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((item)=>console.log((item)))
.catch((err)=>(err))
