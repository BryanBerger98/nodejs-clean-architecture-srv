import TodoListDto from "../../dto/todoList.dto";
import TodoListModel from "../../models/todoList.model";

export default class CreateTodoList {
    constructor({createTodoList}) {
        return (req, res) => {
            const todoList = new TodoListDto(req.body);
            createTodoList.execute(todoList)
            .then(response => res.status(201).json(new TodoListModel(response)))
            .catch(error => res.status(500).json(error.message));
        }
    }
}