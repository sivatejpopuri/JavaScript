import {Person} from './classperson.js'

class Student extends Person{
    constructor(firstname,lastname,age,gender,marks)
    {
        super(firstname,lastname,age,gender)
        this.marks=marks
    }
    location()
    {
        return 'QUT'
    }


}
let student1 = new Student('John', 'Park', 18, 'M', 999)
console.log(student1)

console.log(student1.location())

// hi

console.log(student1.fullName())




