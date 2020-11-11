import TodoListModel from "../../models/todoList.model";

export default class GetTodoListById {
    constructor({getTodoListById}) {
        return (req, res) => {
            getTodoListById.execute(req.params.id)
            .then(response => res.status(200).json(new TodoListModel(response)))
            .catch(error => res.status(500).json(error.message));
        }
    }
}