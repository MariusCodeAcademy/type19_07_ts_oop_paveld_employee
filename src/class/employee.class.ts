import Person from './person.class.js';

export default class Employee extends Person {
  private hoursWorked: number;
  constructor(first: string, last: string, private hourlyPay: number) {
    super(first, last);
    this.hoursWorked = 0;
  }

  public work(howMany: number) {
    console.log(`-- ${this.firstName} worked for ${howMany} hours`);
    this.hoursWorked += howMany;
  }

  public calcPay(): number {
    // console.log('skaiciuojam alga');
    // paskaiciuoti kiek gaunasi isdirbtas val padauginus is valandinio
    const alga = this.hoursWorked * this.hourlyPay;
    console.log(`-- ${this.firstName} ismoketi ${alga.toFixed(2)}eur`);
    // nunulinti valandas
    this.hoursWorked = 0;
    return alga;
  }
}
