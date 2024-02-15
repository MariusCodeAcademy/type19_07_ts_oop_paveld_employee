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
}
