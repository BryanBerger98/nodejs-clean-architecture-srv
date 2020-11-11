export default class DeleteTodoListById {

    constructor(todoListsData) {
        this.todoListsData = todoListsData;
    }

    execute(id) {
        return new Promise((resolve, reject) => {
            this.todoListsData.deleteTodoListById(id).then(resolve).catch(reject);
        });
    }

}