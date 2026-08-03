/*Object, dot notation => used to access properties of an object */

let user2 = {
  id: 1,
  name: 'Glory Samson',
  age: 30,
  email: 'glorybamieko@gmail.com'
}

console.log(user2.age)
console.log(user2.name)
console.log(user2.email)


/* Nested objects - objects inside objects */

let user3 = {
  id: 2,
  name: {
    surNmae: 'Bamiteko',
    otherName: {
      firstName: 'Glory',
      lastName: 'Samson'
    }
  },
  age: 30,
  email: 'glorybamieko@gmail.com'
}

console.log(user3.name.otherName.lastName)