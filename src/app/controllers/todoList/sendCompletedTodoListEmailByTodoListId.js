export default class SendCompletedTodoListEmailByTodoListId {
    constructor({sendCompletedTodoListEmailByTodoListId}) {
        return (req, res) => {
            sendCompletedTodoListEmailByTodoListId.execute(req.params.id)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error.message));
        }
    }
}