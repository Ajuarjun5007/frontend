// let name="arjun"
// console.log(name)

// let bmw={
//     wheels:4,
//     altered:true,
//     airbag:4,
//     "ac":true,
//     model:2021
// }
// console.log(bmw["ac"],bmw["altered"],bmw.airbag,"yearofpurchase")
// let arr=[1,2,3,4];
// arr.push(100)
// console.log(arr)
// arr.shift();
// console.log(arr)
//---------------xxxxxxxxxxx---------
// console.log(Math.pow(2,4))
// console.log(Math.abs(2-3))
// console.log(2**8)
// let a= +"121"-2
//----------comparsion
//any + value converts string into int
// console.log(1=="1")
// // checks value.i.e.converts num 5 and checks
// console.log(1==="1")
// checks type whether its sme data type or not
// console.log('wzxs'>'Abcd')
// for loop...
// let arr1=[1,2,3,4,5]
// for(item of arr1){
//     console.log(item)
//}/*imperative approach for each*/
// arr1.forEach(item => {
//     console.log(item)
// }) /*declarative approach
//----------for in--->loop over object----
// let obj = {
//     name :  "arjun",
//     age : 29,
//     candrive : false
//     }

// for (const key in obj) {
//         console.log(key)
//         console.log(obj[key])
//           }/*very important topic*/
// -------functions------------
// function sum(a,b){
 
//     return a+b
// }

// let ans=sum("arjun",22)
// // console.log(ans)
// let c=12;
// function sum(a,b){
//     return a+b+c;
// }
// let result=sum(1,2)
// console.log(result)

// /*default values in function */

// function sum(a,b=1){
//     return a+b
// }
// console.log(sum(121,121))
//--------decalration of function-----
// let sumExpression = function(a,b){
//     return a+b;
// }
// let result=sumExpression(1,1)
// console.log(result)

// let str="hi"
// const num=str.split(" ")
// let ans =num.length
// console.log(ans)
//---------XXXXXXXXXX-----------
//    HOISTING IN JS
// getName();
// console.log(x);
// console.log(x);
// var x=7
// getName()
// function getName(){
//     console.log("hello world")
// }
// console.log(getName)
// ---------XXXXXXXXXXX---------
// const cars=["audi","bmw","FZ"];
// console.log(cars)
// cars[0]="porsche";
// cars.push("tata")
// console.log(cars)
// --------XXXXXXXXXXXXX---------
// const array=[1,2,3,4,"sir",2.322];
// for(let x of array){
  
// }
//-----------------String methods----
// let str1="    consistence is the key to the success  ";
// let str2=" destiny"
// console.log(str1.slice(5,11));
// console.log(str1.substring(1,10))// substring(start,end)
// console.log(str1.substr(4,6))// substr(start,length)
// console.log(str1.replace("I am","we are "))// replace i am with we are
// console.log(str1.replaceAll(" the","$"));// replace all the with $
// console.log(str1.toUpperCase());// changes all letters in capital 
// console.log(str1.toLowerCase());//changes all letters in smaller
// console.log(str1.trim());// removes the extra space in string
// console.log(str1.trimStart());//removes the extra space in string at stsrt
// console.log(str1.trimEnd());// removes the extra space in string at end
//console.log(str1.padEnd(45,'a'))// add char a at end until the length becomes 45

//console.log(str1.padStart(45,'a'));// add char a at start until the length becomes 45

//console.log(str1[33]);// dreturns the character in that index
//console.log(str1.indexOf('e'));// returns the  first index of that character.
//console.log(str1.lastIndexOf('e'))
//console.log(str1.search('the'))// search the input 
//console.log(str1.includes('not'))// search the input returns yes or no

// try to return a random letter in name
// let name="malligarjun"
// let output=name[Math.round(Math.random()*name.length-1)];
// console.log(output)
/// --------------TEMPLATE LITERALS------------------
//     let firstname="john";
//     let secondname="wick";
//     let city="cbe";
//     console.log(`${firstname} ${secondname} lives in ${city}`)
//     let itemCount=5;
//     let Total=95;
//     console.log(`"You have ${itemCount}.
//  Your bill amount is $${Total}"`);
 // --------------XXXXXXXX-------------
//   Arrow function
//   let arr=[1,2,3,4,5]
//   let sum=(arr)=>{
    
//     let add=0;
//     for(let item of arr){
//         add+=item;

//     }
//     console.log(add)
//   }
//   console.log(sum(arr))

//arguments
// let addition=function (...args){
//     let sum=0;
//     for(let val of args)
//     sum+=val
//     return sum
// }
// console.log(addition(1,2,3,45,3))
// // --------------call back-------------
// let name="arjun"
// function greeting(name){
//     console.log("Hi am ", name)
// }
// // greeting(name)
// function greetHeading (name){
//     let heading = document.querySelector('.main')
//     heading.innerHTML="my name is "+ name;
// }
// function greetOthers(callback) {
//     callback(name)
// }
// greetOthers(greeting)
// greetOthers(greetHeading)
// ---------forEach------
//  arr=['arjun','ram','ani']
//  arr.forEach(myFunction);
// function myFunction(name) {
//     console.log('Hi i am ',(name.toUpperCase()))
// }

// const arr=['ECE','MECH','EEE','CSE']
// arr.forEach(val => {
//     const opt = document.createElement('option')
//     opt.textContent=val;
//     opt.value=val;
//    const options= document.querySelector(".dropdown")
//  options.appendChild(opt)
// })
//---------map,filter,reduce--------
// ---map---
// let arr =[12,231,211,200,34]
// let oddnum =arr.map(item => Math.round(item/2))
// console.log(oddnum)
// //----filter---
// let num = arr.filter(item => item%2==0)
// console.log(num)
// //reduce
// let sum = arr.reduce((total,el) => total+el,-100 )
// console.log(sum)
// let darr = [
//                 ['a','b','c'],
//                 ['d','a','d'],
//                 ['g','h','i']
// ]
// let result = darr.flat().reduce((total,el) =>{
//             if(total[el]){
//                 total[el]++;
//             }else{
//                 total[el]=1
//             }
//             return total
// },{})
// console.log(result)
//----------return functions and closures-----------
// // let x=10;
// function outer(x){
//    return  function (y){
//         return (x+y)
//     }
// //    return  inner()
// }
//   let res = outer(8)
//   console.log(res(10))
// ---------set and map-----
//set
// let arr =[1,2,3,4,4,4,7,8];
// let set1 =new Set(arr)
// for(let i=0; i<arr.length; i++){
//     set1.add(arr[i])
// }
// set1.forEach((k,v,set1)=>{
//     console.log(k)
// }
// )
// map
// let map = new Map()
// map.set('a',1)
// map.set('b',2)
// map.set('c',3)
// map.set('d',4)
// console.log(map)
