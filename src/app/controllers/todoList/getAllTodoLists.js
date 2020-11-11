import TodoListArrayModel from "../../models/todoListArray.model";

export default class GetAllTodoLists {
    constructor({getAllTodoLists}) {
        return (req, res) => {
            getAllTodoLists.execute()
            .then(response => res.status(200).json(new TodoListArrayModel(response)))
            .catch(error => res.status(500).json(error.message));
        }
    }
}