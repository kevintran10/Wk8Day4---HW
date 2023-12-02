// 1. Given the data below, define a type alias for representing users.
type Instructor = {
    readonly name: string,
    age: number,
    company?: string
}


let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];
console.log(users)
// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
// create a type
type DaysOfTheWeek = ('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')

let actualDay: DaysOfTheWeek = "Thursday"
let actualDay2: DaysOfTheWeek = "Wednesday"
console.log(actualDay)
console.log(actualDay2)

// 3. Given the Person class below, create a getter for getting the full name of a person.
//create class Person
class Person {
    constructor(public firstName:string, public lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
// create a printInfo = () => {}
    printInfo = (): string => {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`
    }
}
const ktran = new Person('Kevin', 'Tran')
console.log(ktran.printInfo())
// 4. Create a new class called "Employee1" that extends "Person" and adds a new property called salary. 

class Employee2 extends Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public salary: number
// Constructors for derived classes must contain a 'super' call.ts(2377)   
        ) { super(firstName,lastName)
    }
    printInfo = (): string => {
        return `${this.firstName} ${this.lastName} makes ${this.salary} a year!`
    }
}   
const RichGuy = new Employee2('Boss', 'Man', 10000000)
console.log(RichGuy.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

// create an interface for employee and address since there's 2 objects in 'employee'
// 1st interface
interface EmployeeInfo {
    name: string,
    salary: number,
    address: EmployeeAddress
}
//2nd interface
interface EmployeeAddress {
    street: string,
    city: string,
    zipCode: number
}

let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

// will attempt to create a class so I can console.log the data


