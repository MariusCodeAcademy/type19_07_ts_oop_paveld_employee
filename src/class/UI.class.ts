import Employee from './employee.class';

export default class UI {
  private static employeeUlEl = document.getElementById('empl') as HTMLUListElement | null;
  private static freelancerUlEl = document.getElementById('freec') as HTMLUListElement | null;

  public static renderEm(arr) {}
  public static addOneEmpl(emObj: Employee) {
    // sukurti li ir patalpinti ji employeeUlEl
    const liEl = '';
  }
}
