export default class Person {
  // protected - pasiekiama is sios ir paveldinciu klasiu
  constructor(protected firstName: string, protected lastName: string) {}

  printFullName(): string {
    const prisistatymas = `${this.firstName} ${this.lastName}`;
    console.log(prisistatymas);
    return prisistatymas;
  }

  // imituojam abstakcia klase
  calcPay() {
    throw new Error('reikia aprasyti calcPay');
  }
}
console.log('EmployeeClass was loaded');
