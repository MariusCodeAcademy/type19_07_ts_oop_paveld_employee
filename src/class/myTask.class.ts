interface TaskIf {
  id: number;
  isDone: boolean;
  title: string;
  amount: number;
}

export default class MyTask implements TaskIf {
  private static count = 0;
  public id: number = ++MyTask.count;
  public isDone: boolean = false;
  constructor(public title: string, public amount: number) {}
}
