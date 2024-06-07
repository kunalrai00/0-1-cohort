/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
      this.todos = [];
  }

  add(todo) {
      this.todos.push(todo);
  }

  remove(index) {
      if (index >= 0 && index < this.todos.length) {
          this.todos.splice(index, 1);
      }
  }

  update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;
      }
  }

  getAll() {
      return this.todos;
  }

  get(index) {
      if (index >= 0 && index < this.todos.length) {
          return this.todos[index];
      }
  }

  clear() {
      this.todos = [];
  }
}

// Example usage:
const todoList = new Todo();
todoList.add("Buy groceries");
todoList.add("Do laundry");
console.log("Initial todos:", todoList.getAll());

todoList.update(0, "Buy vegetables");
console.log("Updated todos:", todoList.getAll());

todoList.remove(1);
console.log("After removing todo at index 1:", todoList.getAll());

console.log("Todo at index 0:", todoList.get(0));

todoList.clear();
console.log("After clearing todos:", todoList.getAll());

module.exports = Todo;
