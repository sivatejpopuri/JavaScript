// 1st way of declaring an array

let marks = Array(9) // 0 - 7

marks = [90, 91, 92, 93, 94, 95, 96, 97,98]

//        0| 1 | 2 | 3 ................|8| // memory  -> starting from 0 to (array size - 1)

console.log(marks)

console.log(marks[6])

// 2nd way of declaring array

let marks1= new Array(90,34,78,76)
console.log('2nd declaration is printing', marks1[0], marks1[2])

//3rd way of declaring array

let marks2= [90,87,93,98,54,76,23]
console.log('3rd declaration is printing', marks2[0],marks2[3],marks[4])
marks2[0]=90
console.log(marks2)
marks2.pop()
console.log(marks2)
console.log(marks2.length)
console.log(marks2.indexOf(54))
console.log('new array length',marks2.push(35))
console.log(marks2)
marks2.unshift(77)
console.log('new element is added',marks2)
marks2.shift()
console.log(marks2)