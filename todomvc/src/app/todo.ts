export class Todo {
  id: number;
  title: string = '';
  date_created: Date;
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}