import UI from './class/UI.class.js';
import Employee from './class/employee.class.js';
import Freelancer from './class/freelancer.class.js';
import MyTask from './class/myTask.class.js';
import Person from './class/person.class.js';

console.log('Hello from app.ts!');

const ui = new UI();

const workingPplArr: Employee[] = [
  new Employee('James', 'Bond', 100),
  new Employee('Mike', 'dow', 50),
];
ui.addOneEmpl(workingPplArr[0]);
ui.addOneEmpl(workingPplArr[1]);
console.table(workingPplArr);

workingPplArr[0].work(80);
workingPplArr[1].work(100);
console.table(workingPplArr);

// workingPplArr.forEach((emObj) => {
//   console.log('alga', emObj.calcPay());
// });

const nameAndPay: { name: string; pay: number }[] = workingPplArr.map((emObj) => {
  return {
    name: emObj.printFullName(),
    pay: emObj.calcPay(),
  };
});
console.log('nameAndPay ===', nameAndPay);
console.table(workingPplArr);

const freeArr: Freelancer[] = [new Freelancer('Tom', 'Cruise'), new Freelancer('Bob', 'Marley')];
console.table(freeArr);

ui.addOneFreeL(freeArr[0]);
ui.addOneFreeL(freeArr[1]);

const tasksArr: MyTask[] = [
  new MyTask('footer', 500),
  new MyTask('header', 300),
  new MyTask('main', 400),
  new MyTask('section', 300),
];

freeArr[0].assingJob(tasksArr[0]);
freeArr[0].assingJob(tasksArr[1]);
freeArr[0].assingJob(tasksArr[2]);
console.table(freeArr);

freeArr[0].completeTaskFromArr(tasksArr[0].id);
freeArr[0].completeTaskFromArr(tasksArr[2].id);
const pay = freeArr[0].calcPay();
console.log('pay ===', pay);
console.log('freeArr[0] ===', freeArr[0]);
