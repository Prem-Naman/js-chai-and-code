//Primitive datatype


// 7 types : String , Number ,boolean, null , undefined , symbol, BigInt

const score = 100
const scoreValue = 100.3 

const isloggedIn= false
const outsideTemp= null 
let userEmail;


const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid);


const bigNumber = 34654353535435n

// Reference (Non primitive )


// Array , objects , function

const heros =["shaktiman","naagraj","doga"];

let obj ={

    name:"Prem",
    age:22,
}
const myFunction=function(){
    console.log("hello wold ")
}

console.log(typeof bignumber);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive) , heap (Non-Primitive)


let myYoutubename="Prem"
let anothername =myYoutubename
anothername= "chai aur code"
console.log(myYoutubename)
console.log(anothername)

