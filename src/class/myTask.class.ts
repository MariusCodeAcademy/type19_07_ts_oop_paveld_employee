export default class MyTask {
  private static count = 0;
  public id: number = ++MyTask.count;
  public isDone: boolean = false;
  constructor(public title: string, public amount: number) {}
}
