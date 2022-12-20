  //                                              create and return a list of elements
  export default function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }