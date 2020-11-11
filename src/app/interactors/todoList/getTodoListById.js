export default class GetTodoListById {

    constructor(todoListsData) {
        this.todoListsData = todoListsData;
    }

    execute(id) {
        return new Promise((resolve, reject) => {
            this.todoListsData.getTodoListById(id).then(resolve).catch(reject);
        });
    }

}