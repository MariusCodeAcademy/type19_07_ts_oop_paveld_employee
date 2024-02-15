class MyTask {
    constructor(title, amount) {
        this.title = title;
        this.amount = amount;
        this.id = ++MyTask.count;
        this.isDone = false;
    }
}
MyTask.count = 0;
export default MyTask;
//# sourceMappingURL=myTask.class.js.map