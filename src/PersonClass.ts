interface PersontInterface {
  name: string;
  age: number;
  town: string;
  hasCar: boolean;
}

interface StudentInterface extends PersontInterface {
  type: 'University' | 'Coledge' | 'School';
  studyYear: number;
}

class Person implements PersontInterface {
  // spec funkcija kuri yra paleidzima kai sukuriamas objektas
  constructor(
    public name: string,
    public age: number,
    public town: string,
    public hasCar: boolean,
  ) {}
  // kiti metodai
  // sukurti info() metodas kuri iskonsolinu "Mano vardas xx as is xx miesto"
  public info(): void {
    const sakinys = `Mano vardas ${this.name} as is ${this.town} miesto`;
    console.log(sakinys);
  }
  // metodas pakeisti miestui
  public changeTown(newTown: string): void {
    // validation
    this.town = newTown;
    console.log(`${this.name} town was changed to ${newTown}`);
  }
}

class Student extends Person implements StudentInterface {
  constructor(
    name: string,
    age: number,
    town: string,
    hasCar: boolean,
    public type: StudentInterface['type'],
    public studyYear: StudentInterface['studyYear'],
  ) {
    super(name, age, town, hasCar);
  }
}

// sukurti klase Darbuotojas
// Darbuotojas paveldi klase Person
// sukurti DarbuotojasInterface kuris paveldi viska is PersonInterface
// ir prideda savybe workPlace im pavadinimas
// ir prideda savybe pareigos: gali buti personalas, vadovas, direktorius
// sukurti nauja objektas ir paziureti ar gaunam tinkama objekta

const st1 = new Student('Serbentautas', 27, 'Kaunas', true, 'Coledge', 2);
console.log('st1 ===', st1);
st1.info();

// const user3 = new Person('James', 25, 'London', true);
// console.log('user3 ===', user3);
// user3.info();
// user3.changeTown('Exeter');

// console.log('user3 ===', user3);
