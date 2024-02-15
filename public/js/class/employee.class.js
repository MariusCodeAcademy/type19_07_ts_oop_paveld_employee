import Person from './person.class.js';
export default class Employee extends Person {
    constructor(first, last, hourlyPay) {
        super(first, last);
        this.hourlyPay = hourlyPay;
        this.hoursWorked = 0;
    }
    work(howMany) {
        console.log(`-- ${this.firstName} worked for ${howMany} hours`);
        this.hoursWorked += howMany;
    }
    calcPay() {
        const alga = this.hoursWorked * this.hourlyPay;
        console.log(`-- ${this.firstName} ismoketi ${alga.toFixed(2)}eur`);
        this.hoursWorked = 0;
        return alga;
    }
}
//# sourceMappingURL=employee.class.js.map