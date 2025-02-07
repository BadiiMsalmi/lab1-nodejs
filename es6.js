const a = 12
let b = 5
var c = 8

function sum(a,b,c) {
  return a + b + c
}

const sum = (a,b,c) => a + b + c

if(a > b) {
  let b = 10
  var c = 6
    console.log(a + b + c)
}

a>b ? console.log(a + b + c) : console.log(a - b - c)

const firstname = 'badii'
const lastName = 'msalmi'

console.log(`My name is ${firstname} ${lastName}`)

const obj = {
    firstname:"badii",
    lastName:"msalmi"
}

console.log({...obj,job:"developer"})  

const arr = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
console.log([...arr,...arr2])

const {name,age} = obj
console.log(age)



