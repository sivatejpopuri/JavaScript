let day='wednesday'
console.log(day)
console.log('length of string is',day.length)

console.log('index of n is',day.indexOf('n'))

let subday= day.slice(0,4)
console.log(subday)
console.log('the word after slice',subday[2])

let splitday= day.split('n')
console.log('the word after split',splitday)

//finding is index of a word

let quote= day+ ' is a great and a new day'
console.log(quote)
console.log(quote.indexOf('great'))

//how many times string/word exists

let dayindex=quote.indexOf('day')
let count=0
while(dayindex!= -1)
{
    count++
    dayindex=quote.indexOf('day',dayindex+1)
}
console.log('count of day word in the string is',count)

//learning time difference between 2 dates

let date1= new Date('05/25/2018')
let date2= new Date('08/15/2023')

let timdiff= date2.getTime() - date1.getTime()
let timeindays= timdiff/ (1000*3600*24)

console.log('time difference in days',timeindays)