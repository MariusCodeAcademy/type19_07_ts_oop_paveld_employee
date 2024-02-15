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
const st1 = new Student('Serbentautas', 27, 'Kaunas', true, 'Coledge', 2);
console.log('st1 ===', st1);
st1.info();
//# sourceMappingURL=PersonClass.js.map