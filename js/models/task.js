export default class Task {
  id;

  name;

  isDone;

  constructor(id, name, isDone) {
    this.id = id;

    this.name = name;

    this.isDone = isDone;
  }
}