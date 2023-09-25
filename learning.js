/*let numbers=[90,98,95,56,43]
console.log('printing numbers', numbers)

console.log('printing 3rd index',numbers[3])
numbers.pop()
console.log('deleting last element',numbers)*/

let day='thursday'
console.log(day)
let quote= day+ ' is a great day and a new day'
console.log(quote)
console.log(quote.indexOf('new'))
let dayindex=quote.indexOf('day')
count=0
while(dayindex!=-1)
{
    count++
    dayindex=quote.indexOf('day',dayindex+1)
}
console.log(count)