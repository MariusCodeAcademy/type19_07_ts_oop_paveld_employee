import createHtmlEL from '../helper/createEl.js';
import Employee from './employee.class.js';
import Freelancer from './freelancer.class.js';

export default class UI {
  private employeeUlEl: HTMLUListElement | null = document.getElementById(
    'empl',
  ) as HTMLUListElement | null;
  private freelancerUlEl = document.getElementById('freec') as HTMLUListElement | null;

  constructor() {
    if (this.employeeUlEl === null || this.freelancerUlEl === null) {
      console.warn('nepataikem i elementus');
    }
  }

  public renderEmplSelect(arr: Employee[]) {
    const selEl = document.getElementById('empl-sel') as HTMLSelectElement | null;
    if (selEl === null) return console.warn('no select element found');
    arr.forEach((empObj) => {
      const opt = createHtmlEL<HTMLOptionElement>(
        'option',
        { value: empObj.id.toString() },
        empObj.printFullName(),
      );
      selEl.append(opt);
    });
  }

  /*  
  <li class="list-group-item d-flex gap-2 align-items-center">
    <h3>Name</h3>
    <p class="mb-0">Pay</p>
  </li>
  */
  public addOneEmpl(emObj: Employee) {
    if (!(emObj instanceof Employee)) {
      return console.warn(emObj, 'is not Freelancer object');
    }
    // sukurti li ir patalpinti ji employeeUlEl
    const liEl = createHtmlEL<HTMLUListElement>('li', {
      class: 'list-group-item d-flex  justify-content-between justy gap-2 align-items-center',
    });
    const titleEL = createHtmlEL<HTMLHeadElement>('h3', { class: 'fs-5' }, emObj.printFullName());
    const payEl = createHtmlEL<HTMLParagraphElement>(
      'p',
      { class: 'mb-0' },
      emObj.payPerHour.toString(),
    );
    liEl.append(titleEL, payEl);
    this.employeeUlEl?.append(liEl);
  }

  public addOneFreeL(freeObj: Freelancer) {
    if (!(freeObj instanceof Freelancer)) {
      return console.warn(freeObj, 'is not Freelancer object');
    }
    const liEl = createHtmlEL<HTMLUListElement>('li', {
      class: 'list-group-item d-flex  justify-content-between justy gap-2 align-items-center',
    });
    const titleEL = createHtmlEL<HTMLHeadElement>('h3', { class: 'fs-5' }, freeObj.printFullName());
    const payEl = createHtmlEL<HTMLParagraphElement>('p', { class: 'mb-0' }, freeObj.toString());
    liEl.append(titleEL, payEl);
    this.freelancerUlEl?.append(liEl);
  }

  public addHoursUI(arr: Employee[]) {
    // nusitaikyti i forma
    const formEl = document.getElementById('add-hours') as HTMLFormElement | null;
    const selEl = document.getElementById('empl-sel') as HTMLSelectElement | null;
    const hoursCountEl = document.getElementById('how-many-hours') as HTMLInputElement | null;
    // paimti reiksmes is select ir input

    if (formEl === null || selEl === null || hoursCountEl === null) {
      throw new Error('neradom formos elementu');
    }

    // uzdeti formai event listeneri
    formEl.addEventListener('submit', (event): void => {
      event.preventDefault();
      // pateikiant forma iskonsolinti  selecto id ir kiek val prideti
      const selectEmlId = selEl.value;
      const howManyHours: number = hoursCountEl.valueAsNumber || 0;
      console.log('selectEmlId ===', selectEmlId);
      console.log('howManyHours ===', howManyHours);
      const found = arr.find((emObj) => emObj.id === +selectEmlId);
      if (found === undefined) return console.warn('nerastas objetas ');
      found.work(howManyHours);
      console.table(arr);
      formEl.reset();
    });
  }

  public printAlgos(arr: (Employee | Freelancer)[]) {
    // arr[0].calcPay
  }
}
