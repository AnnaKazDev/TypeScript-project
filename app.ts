class Person {
    name: string;
    private type: string;
    protected age: number = 25;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Lady");
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person("Ania", "ania");
console.log(person.name, person.username);
person.printAge();

//INHERITANCE
class Anna extends Person {
    name = "Anna";
    username = "someGreatUsername";

    constructor(name: string, username: string) {
        super("Max", username);
        console.log(this.age);

    }
}
const anna = new Anna("randomName", "myUsername");
console.log(anna);


//GETTERS AND SETTERS
class Plant {
    private _species: string = "Default plant";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value.toUpperCase() + ' - what a great name for a plant!';
        } else {
            this._species = "Default plant";
        }
    }
}

let plant = new Plant;
console.log(plant);
plant.species = "YY";
console.log(plant);
plant.species = "Forget-me-not";
console.log(plant);

//STATIC PROPERTIES METHODS
class Helpers {
    static PI: number = 3.13;

    static calcCircumstance(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumstance(8));


class Dog {
    static id: number = 0;
    id: number;
    state: string = 'happy';

    constructor(private name: string) {
        this.id = ++Dog.id;
    }

    static printBark(name: string, state: string, id: number): string {
        return "Woof! Woof! I am " + name + ". And I am " + state + ". My id is " + id;
    }

    bark(): string {
        let bark: string = Dog.printBark(this.name, this.state, this.id);
        return bark;
    }
}

let fluffy: Dog = new Dog('fluffy');
console.log(fluffy.bark());

let barky: Dog = new Dog('barky');
console.log(barky.bark());

let ricky: Dog = new Dog('ricky');
console.log(ricky.bark());


//ABSTRACT CLASSES - they are to be inherited from, blueprints
//this class needs to be extended
abstract class Project {
    projectName: string = "Default project name";
    budget: number = 100;

    //logic of this method will be in the child class
    abstract changeName(name: string): void;

    calcBudget(value: number) {
        console.log(this.budget * value);
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject:ITProject = new ITProject;
newProject.calcBudget(44);
console.log(newProject);
newProject.changeName("HR Project");
console.log(newProject);

//PRIVATE CONSTRUCTORS
