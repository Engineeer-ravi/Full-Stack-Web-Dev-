//factory punction
// function PersonMaker(name,age) {
//     const person ={
//         name: name,
//         age: age,
//         talk() {
//             console.log(`hii, my name is ${this.name}`);
//         }
//     };
//     return person;
// }
// let p1 =PersonMaker("ravi",21);
// let p2 =PersonMaker("suraj",25)



//Counstructor- dosen't return anything start with capital letter

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);

// }
// New Opretor- the oprator create lets develop an instance of a user-defind object type or of one of the built-in objects types that has a constructor function

// Person.prototype.talk =function() {
//     console.log(`hi my name is ${this.name}`);
// };
// let p1 = new Person("ravi",24)    
// let p2 = new Person("suraj",25)


//classes-Classes are a template for creating objects.
//the constructor methode is a special methode for creating and initializing an object instance of that class.

// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`hi my name is ${this.name}`);
//     }
// }
// let p1 = new Person("ravi",24)    
// let p2 = new Person("suraj",25)


//Inheritance- Inheritance is a mechanism that allows us to create a new class basis of alredy existing classes.

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,age,grade) {
        super(name,age);//parent class constructor is being called
        this.grade = grade;
    }
}
// let p1 = new Student("ravi",24)    
// let p2 = new Student("suraj",25)

class Teacher extends Person {
    constructor(name,age,subject) {
        super(name,age);//parent class constructor is being called
        this.subject = subject;
    }
}
