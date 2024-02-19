import Freelancer from './class/freelancer.class.js';
import MyTask from './class/myTask.class.js';
console.log('Hello from app.ts!');
const freeArr = [new Freelancer('Tom', 'Cruise'), new Freelancer('Bob', 'Marley')];
console.table(freeArr);
const tasksArr = [
    new MyTask('footer', 500),
    new MyTask('header', 300),
    new MyTask('main', 300),
    new MyTask('section', 300),
];
freeArr[0].assingJob(tasksArr[0]);
freeArr[0].assingJob(tasksArr[1]);
console.table(freeArr);
freeArr[0].completeTaskFromArr(tasksArr[0].id);
console.table(tasksArr);
console.log('freeArr[0] ===', freeArr[0]);
//# sourceMappingURL=app.js.map