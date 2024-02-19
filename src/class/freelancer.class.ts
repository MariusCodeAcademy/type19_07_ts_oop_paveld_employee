import MyTask from './myTask.class.js';
import Person from './person.class.js';

export default class Freelancer extends Person {
  private jobs: MyTask[] = [];
  // praplesti Employee
  constructor(fName: string, lName: string) {
    super(fName, lName);
  }

  assingJob(newJob: MyTask) {
    // prideti argumentu gauta darba i darbu masyva
    // patikrtinti ar newJob yra darbo objektas sukurtas pagal
    // Job klase
    if (!(newJob instanceof MyTask)) {
      console.warn('netikras darbas', newJob);
      return;
    }
    this.jobs.push(newJob);
    // console.table(this.jobs);
    // console.log(JSON.stringify(this.#jobs, null, 2));
  }

  public completeTaskFromArr(idToComplete: number): void {
    // task uzbaigimo logika
    // sukti cikla per darbu masyva, surasti darba su id lygiu idToComplete ir padaryti ji baigtu
    const found: MyTask | undefined = this.jobs.find((jObj) => jObj.id === idToComplete);
    // found arba radom arba ne
    if (found === undefined) return console.warn('neradom objekto su id', idToComplete);
    found.isDone = true;
  }

  calcPay(): number {
    // atlyginimo apskaiciavimas
    // atrinkti tik atliktus darbus, ir paskaiciuoti ju suma (grazinti)
    const completedTasks: MyTask[] = this.jobs.filter((jObj) => jObj.isDone === true);
    // console.log('completedTasks ===', completedTasks);
    const sum: number = completedTasks.reduce((total, jObj) => total + jObj.amount, 0); // reduce
    // isimti is darbu masyvo atliktus darbus
    this.jobs = this.jobs.filter((jObj) => jObj.isDone === false);
    return sum;
  }
}
