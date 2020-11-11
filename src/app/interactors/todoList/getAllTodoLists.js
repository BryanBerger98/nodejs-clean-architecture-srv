export default class GetAllTodoLists {

    constructor(todoListsData) {
        this.todoListsData = todoListsData;
    }

    execute() {
        return new Promise((resolve, reject) => {
            this.todoListsData.getAllTodoLists().then(resolve).catch(reject);
        });
    }

}