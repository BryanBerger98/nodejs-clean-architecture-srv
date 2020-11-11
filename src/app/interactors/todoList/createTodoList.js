import TodoListEntity from '../../entities/TodoListEntity';

export default class CreateTodoList {

    constructor(todoListsData) {
        this.todoListsData = todoListsData;
    }

    execute(todoList) {
        return new Promise((resolve, reject) => {
            todoList = new TodoListEntity(todoList);
            this.todoListsData.createTodoList(todoList).then(resolve).catch(reject);
        });
    }

}