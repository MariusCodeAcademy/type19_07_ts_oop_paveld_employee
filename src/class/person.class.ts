export default abstract class Person {
  private static count = 0;
  public id: number;
  // protected - pasiekiama is sios ir paveldinciu klasiu
  constructor(protected firstName: string, protected lastName: string) {
    this.id = ++Person.count;
  }

  printFullName(): string {
    const prisistatymas = `${this.firstName} ${this.lastName}`;
    // console.log(prisistatymas);
    return prisistatymas;
  }

  // imituojam abstakcia klase
  abstract calcPay(): number;
}

// new Person('james', 'band'); // Cannot create an instance of an abstract class

console.log('EmployeeClass was loaded');
