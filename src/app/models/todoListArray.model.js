export default class TodoListArrayModel {

    constructor(todoLists) {
        return todoLists.map(todoList => {
            return {_id: todoList._id, title: todoList.title, completed: todoList.completed, tasks: todoList.tasks, created_on: todoList.created_on};
        });
    }

}