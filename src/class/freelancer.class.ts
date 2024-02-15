import MyTask from './myTask.class';
import Person from './person.class';

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
    console.table(this.jobs);
    // console.log(JSON.stringify(this.#jobs, null, 2));
  }
}
