// create a class to define properties of a person

export class Person{
    constructor(firstname, lastname, age, gender){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
        this.gender=gender
    }
    fullName()
{
    let fullname= this.firstname +' ' + this.lastname
    return fullname
}
location(){

return 'Australia'
}
}

let shiva= new Person('shiva', 'chiru', 25, 'M')
//console.log(shiva.age)
//console.log(shiva.fullName())
//console.log(shiva.location())

// 2nd update