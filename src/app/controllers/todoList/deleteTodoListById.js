import TodoListModel from "../../models/todoList.model";

export default class DeleteTodoListById {
    constructor({deleteTodoListById}) {
        return (req, res) => {
            deleteTodoListById.execute(req.params.id)
            .then(response => res.status(200).json(new TodoListModel(response)))
            .catch(error => res.status(500).json(error.message));
        }
    }
}