import createHtmlEL from '../helper/createEl.js';
import Employee from './employee.class.js';

export default class UI {
  private static employeeUlEl = document.getElementById('empl') as HTMLUListElement | null;
  private static freelancerUlEl = document.getElementById('freec') as HTMLUListElement | null;

  constructor() {
    if (UI.employeeUlEl === null || UI.freelancerUlEl === null) {
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
  public static addOneEmpl(emObj: Employee) {
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
    UI.employeeUlEl?.append(liEl);
  }
}
