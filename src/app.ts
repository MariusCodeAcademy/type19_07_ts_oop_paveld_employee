import UI from './class/UI.class.js';
import Employee from './class/employee.class.js';
import Freelancer from './class/freelancer.class.js';
import MyTask from './class/myTask.class.js';

// console.log('Hello from app.ts!');

const ui = new UI();

// // nusitaikyti i forma
// const formEl = document.getElementById('add-hours') as HTMLFormElement | null;
// const selEl = document.getElementById('empl-sel') as HTMLSelectElement | null;
// const hoursCountEl = document.getElementById('how-many-hours') as HTMLInputElement | null;
// // paimti reiksmes is select ir input

// if (formEl === null || selEl === null || hoursCountEl === null) {
//   throw new Error('neradom formos elementu');
// }

// // uzdeti formai event listeneri
// formEl.addEventListener('submit', (event): void => {
//   event.preventDefault();
//   // pateikiant forma iskonsolinti  selecto id ir kiek val prideti
//   const selectEmlId = selEl.value;
//   const howManyHours: number = hoursCountEl.valueAsNumber || 0;
//   // console.log('selectEmlId ===', selectEmlId);
//   // console.log('howManyHours ===', howManyHours);
//   const found = workingPplArr.find((emObj) => emObj.id === +selectEmlId);
//   if (found === undefined) return // console.warn('nerastas objetas ');
//   found.work(howManyHours);
//   // console.table(workingPplArr);
//   formEl.reset();
// });
// pateikiant forma iskonsolinti darbuotojo objekta

const workingPplArr: Employee[] = [
  new Employee('James', 'Bond', 100),
  new Employee('Mike', 'dow', 50),
  new Employee('Serbentauas', 'B', 25),
];

ui.renderEmplSelect(workingPplArr);
ui.addOneEmpl(workingPplArr[0]);
ui.addOneEmpl(workingPplArr[1]);
ui.addOneEmpl(workingPplArr[2]);
// console.table(workingPplArr);

workingPplArr[0].work(80);
workingPplArr[1].work(100);
// console.table(workingPplArr);

ui.addHoursUI(workingPplArr);

workingPplArr.forEach((emObj) => {
  // console.log('alga', emObj.calcPay());
});

// const nameAndPay: { name: string; pay: number }[] = workingPplArr.map((emObj) => {
//   return {
//     name: emObj.printFullName(),
//     pay: emObj.calcPay(),
//   };
// });
// console.log('nameAndPay ===', nameAndPay);
// console.table(workingPplArr);

const freeArr: Freelancer[] = [new Freelancer('Tom', 'Cruise'), new Freelancer('Bob', 'Marley')];
// console.table(freeArr);
// ui.renderEmplSelect(freeArr); // neveikia
ui.addOneFreeL(freeArr[0]);
ui.addOneFreeL(freeArr[1]);
// ui.addOneFreeL(freeArr[2]);

const tasksArr: MyTask[] = [
  new MyTask('footer', 500),
  new MyTask('header', 300),
  new MyTask('main', 400),
  new MyTask('section', 300),
];

freeArr[0].assingJob(tasksArr[0]);
freeArr[0].assingJob(tasksArr[1]);
freeArr[0].assingJob(tasksArr[2]);
// console.table(freeArr);

freeArr[0].completeTaskFromArr(tasksArr[0].id);
freeArr[0].completeTaskFromArr(tasksArr[2].id);
// const pay = freeArr[0].calcPay();
// // console.log('pay ===', pay);
// // console.log('freeArr[0] ===', freeArr[0]);

const darbArr: (Employee | Freelancer)[] = [...workingPplArr, ...freeArr];

console.table(darbArr);

// polymorphism

ui.printAlgos(darbArr);
console.table(darbArr);
