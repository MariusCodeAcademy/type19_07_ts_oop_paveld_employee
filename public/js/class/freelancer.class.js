import MyTask from './myTask.class.js';
import Person from './person.class.js';
export default class Freelancer extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.jobs = [];
    }
    assingJob(newJob) {
        if (!(newJob instanceof MyTask)) {
            console.warn('netikras darbas', newJob);
            return;
        }
        this.jobs.push(newJob);
        console.table(this.jobs);
    }
    completeTaskFromArr(idToComplete) {
        const found = this.jobs.find((jObj) => jObj.id === idToComplete);
        if (found === undefined)
            return console.warn('neradom objekto su id', idToComplete);
        found.isDone = true;
    }
    calcPay() {
        return 0;
    }
}
//# sourceMappingURL=freelancer.class.js.map