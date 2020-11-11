import TodoListDto from "../../dto/todoList.dto";

export default class SendCompletedTodoListEmail {
    constructor({sendCompletedTodoListEmail}) {
        return (req, res) => {
            const todoList = new TodoListDto(req.body);
            sendCompletedTodoListEmail.execute(todoList)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error.message));
        }
    }
}