import Employee from './class/employee.class.js';
import Freelancer from './class/freelancer.class.js';
import MyTask from './class/myTask.class.js';
import Person from './class/person.class.js';

console.log('Hello from app.ts!');

// const workingPplArr: Employee[] = [
//   new Employee('James', 'Bond', 100),
//   new Employee('Mike', 'dow', 50),
// ];
// console.table(workingPplArr);

// workingPplArr[0].work(80);
// workingPplArr[1].work(100);
// console.table(workingPplArr);

// // workingPplArr.forEach((emObj) => {
// //   console.log('alga', emObj.calcPay());
// // });

// const nameAndPay: { name: string; pay: number }[] = workingPplArr.map((emObj) => {
//   return {
//     name: emObj.printFullName(),
//     pay: emObj.calcPay(),
//   };
// });
// console.log('nameAndPay ===', nameAndPay);
// console.table(workingPplArr);

const freeArr: Freelancer[] = [new Freelancer('Tom', 'Cruise'), new Freelancer('Bob', 'Marley')];
console.table(freeArr);

const tasksArr: MyTask[] = [
  new MyTask('footer', 500),
  new MyTask('header', 300),
  new MyTask('main', 300),
  new MyTask('section', 300),
];
freeArr[0].assingJob(tasksArr[0]);
freeArr[0].assingJob(tasksArr[1]);
console.table(freeArr);

freeArr[0].completeTaskFromArr(tasksArr[0].id);
const pay = freeArr[0].calcPay();
console.log('pay ===', pay);
console.log('freeArr[0] ===', freeArr[0]);
