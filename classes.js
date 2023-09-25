class Car{
    constructor(color,fuelmode,brand,price,availability)
    {
    this.color=color
    this.fuelmode=fuelmode
    this.brand=brand
    this.price=price
    this.availability
    }
}
let Tesla = new Car('Red', 'EV', 'Tesla', 45000, 'Available') //class object creation
console.log(Tesla.color)
console.log(Tesla.price)

let Mazda= new Car('Grey','Petrol', 'Mazda', 60000, 'Available')
console.log(Mazda.brand)
console.log(Mazda.price)

