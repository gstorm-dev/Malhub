// introduction to javascript

//declaring a variable
let name = "John Doe";
let g = '';
console.log('Go and Play Football')

console.log(name)

let age = 19

console.log('age is', age)

let data = 'mobile'
let unkn = 'lost'
let all = "my" +' '+ data +" "+ "is" +" "+ unkn 
console.log(all)

let you = '';
you = 'mr'
console.log(you)



//concatenation


let fullName = 'Glorysamson'
let school = 'lautech'
let profile = 'my name is' +' '+ fullName + ' ' + 'and i attend ' + school
console.log('"i said"',profile)

let me = 'you'
let us = 'them'
let everybody = 'me' + ' ' + 'us'
console.log(everybody)

let myName = 'emma said \"dont be late\"'
console.log(myName)

// arithemetic operation
let x =100
let y =30

console.log(x+y)
console.log(x*y)
console.log(x-y)
console.log(x>y)
console.log(x<y)
console.log(x%y)
console.log(x/y)
console.log(++y)
console.log(--x)

let isRaining = false

if (isRaining) {
  console.log('carry an umbrella')
}else{
  console.log('dont carry an umbrella')
}


let thereBelight = 'saidbyGod'

if (thereBelight) {
  console.log('and there is light')
}else{
  console.log('there was no light')
}

let number = 99
let alphabet = 'A-O'

if(number <=99 && alphabet) {
  console.log('you are eligible')
}else{
  console.log('you are not eligible')
}

if(number || alphabet) {
    console.log('you are eligible')
}else{
  console.log('you are not eligible')
}

if(number /! alphabet) {
    console.log('you are eligible')
}else{
  console.log('you are not eligible')
}


// interpolation

let cars = `Bmw (${1+1}): $${(100+20)}`
let bike = `Yamaha (${1+1}): $${(150+30)}`


console.log(cars)

console.log(bike)
