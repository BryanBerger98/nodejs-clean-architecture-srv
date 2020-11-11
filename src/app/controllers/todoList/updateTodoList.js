import TodoListDto from "../../dto/todoList.dto";
import TodoListModel from "../../models/todoList.model";

export default class UpdateTodoList {
    constructor({updateTodoList}) {
        return (req, res) => {
            const todoList = new TodoListDto(req.body);
            updateTodoList.execute(todoList)
            .then(response => res.status(200).json(new TodoListModel(response)))
            .catch(error => res.status(500).json(error.message));
        }
    }
}