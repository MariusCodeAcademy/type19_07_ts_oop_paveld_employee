import createHtmlEL from '../helper/createEl.js';
import Employee from './employee.class.js';
import Freelancer from './freelancer.class.js';

export default class UI {
  private employeeUlEl: HTMLUListElement | null = document.getElementById(
    'empl1',
  ) as HTMLUListElement | null;
  private freelancerUlEl = document.getElementById('freec') as HTMLUListElement | null;

  constructor() {
    if (this.employeeUlEl === null || this.freelancerUlEl === null) {
      console.warn('nepataikem i elementus');
    }
  }

  // public static renderEm(arr: ) {}

  /*  
  <li class="list-group-item d-flex gap-2 align-items-center">
    <h3>Name</h3>
    <p class="mb-0">Pay</p>
  </li>
  */
  public addOneEmpl(emObj: Employee) {
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
    const liEl = createHtmlEL<HTMLUListElement>('li', {
      class: 'list-group-item d-flex  justify-content-between justy gap-2 align-items-center',
    });
    const titleEL = createHtmlEL<HTMLHeadElement>('h3', { class: 'fs-5' }, freeObj.printFullName());
    const payEl = createHtmlEL<HTMLParagraphElement>('p', { class: 'mb-0' }, freeObj.toString());
    liEl.append(titleEL, payEl);
    this.freelancerUlEl?.append(liEl);
  }
}
