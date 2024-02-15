"use strict";
class Person {
    constructor(name, age, town, hasCar) {
        this.name = name;
        this.age = age;
        this.town = town;
        this.hasCar = hasCar;
    }
    info() {
        const sakinys = `Mano vardas ${this.name} as is ${this.town} miesto`;
        console.log(sakinys);
    }
    changeTown(newTown) {
        this.town = newTown;
        console.log(`${this.name} town was changed to ${newTown}`);
    }
}
class Student extends Person {
    constructor(name, age, town, hasCar, type, studyYear) {
        super(name, age, town, hasCar);
        this.type = type;
        this.studyYear = studyYear;
    }
}
class Darbuotojas extends Person {
    constructor(name, age, town, hasCar, workPlace, pareigos) {
        super(name, age, town, hasCar);
        this.workPlace = workPlace;
        this.pareigos = pareigos;
    }
}
const w1 = new Darbuotojas('Jill', 33, 'Vilnius', true, 'Vilniaus bokstas', 'personalas');
w1.info();
console.log('w1 ===', w1);
class Vadovas extends Darbuotojas {
    constructor(name, age, town, hasCar, workPlace) {
        super(name, age, town, hasCar, workPlace, 'vadovas');
        this.emploees = [];
    }
    addEmployee(em) {
        this.emploees.push(em);
    }
}
new Vadovas('James', 45, 'Klp', false, 'Uostas');
class Employee extends Person {
    constructor(name, age, town, hasCar, workPlace, position) {
        super(name, age, town, hasCar);
        this.workPlace = workPlace;
        this.position = position;
    }
}
const st1 = new Student('Serbentautas', 27, 'Kaunas', true, 'Coledge', 2);
console.log('st1 ===', st1);
st1.info();
//# sourceMappingURL=PersonClass.js.map