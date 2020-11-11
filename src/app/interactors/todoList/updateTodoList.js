import TodoListEntity from '../../entities/TodoListEntity';

export default class UpdateTodoList {

    constructor(todoListsData) {
        this.todoListsData = todoListsData;
    }

    execute(todoList) {
        return new Promise((resolve, reject) => {
            todoList = new TodoListEntity(todoList);
            this.todoListsData.updateTodoList(todoList).then(resolve).catch(reject);
        });
    }

}