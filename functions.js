function addtwonumbers(a,b)
{
    return a+b
}
let sum= addtwonumbers(10,20)
console.log(sum)

// function without a name
let sumofnumbers= function(c,d)
{
    return c+d
}
console.log(sumofnumbers(10,4))

// arrow function
let sumof2numbers= (a,b) => a + b
console.log(sumof2numbers(10,50))

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
  }
  
  let myName = fullName('Shiva', 'Ch')
  console.log(myName)
  
