/*1. what is JavaScript ?
ans: Java Script is a programming language used to create DOM like structure and make dynamic  web pages.
 it is helps to make the responsiveness like nav bar, counter,etc... */

 //2. Variables and Types:
 let userage=17
 let username="Mithra"
 console.log(userage)
 console.log(username)

 //3.Comments in Java Script: [This is a single line comment]
 /*This is a multi line comment*/

 //4.operations:
 let num1=10
 let num2=5
 console.log(num1 + num2)
 console.log(num1 - num2)
 console.log(num1 * num2)
 console.log(num1 / num2)

 //5.Data Types:
 let num= 5
 let str= "String"
 let bool= "true"
 let arr= [1,2,3,4,5]
 console.log(num,str,bool,arr)

 //6.Functions in Java Script :
function greetuser(name){
    console.log(name)
}
greetuser("Welcome To Java Script")

//7.if else in Java Script
let temperature= 40
if(temperature>30){
    console.log("The temperature is greater than 30")
}
else{
    console.log("The temperature is not greater than 30")
}

//8.For Loop in Java Script
for(let i=1;i<=5;i=i+1){
    console.log(i)
}

/**9.Loose vs Strict Equality
 loose equality (==): it is used to compare two values and returns true
 or false. Example:5==5  True

 strict equality: if the values has same type and same value,they're
 considered as equal. Example:(5==="5") True
 
* */
 