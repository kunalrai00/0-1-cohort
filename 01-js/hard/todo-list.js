class Todo {
  constructor() {
    this.todos = [];
  }

  add(newTodo) {
    this.todos.push(newTodo);
  }

  remove(indexOfTodoToRemove) {
    if (indexOfTodoToRemove < this.todos.length) {
      this.todos.splice(indexOfTodoToRemove, 1);
    } else {
      return undefined;
    }
  }

  update(index, updatedTodo) {
    if (index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      return undefined;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      return null; // Return null for out-of-bound index
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
