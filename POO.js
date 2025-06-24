class Person {
    constructor(fisrtName, lastName, age){
        this.fisrtName = fisrtName,
        this.lastName = lastName,
        this.age = age
    }

    getFullname(){
        console.log(`${this.fisrtName} ${this.lastName}`);
    }

    static speak(){
        console.log('Hello World!');
    }
}

const person = new Person('Maria', 'Vitória', 19);
console.log(person);
person.getFullname();

Person.speak(); //método estático é acessado pela própria classe.

//herança
class Animal {
    constructor(nome){
        this.nome = nome;
    }

    speak(){ 
        console.log(`${this.nome} fez barulho`);
    }
}

class Dog extends Animal {
    constructor(nome){
        super(nome);
    }

    speak(){
        console.log(`${this.nome} latiu "au au"`);
    }
}

const animal = new Animal('Baby');
const dog = new Dog('Pandora');

//subescrita.
animal.speak();
dog.speak();