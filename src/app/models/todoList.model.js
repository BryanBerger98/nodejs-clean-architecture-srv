export default class TodoListModel {

    constructor({_id, title, completed, tasks, created_on}) {
        this._id = _id;
        this.title = title;
        this.completed = completed;
        this.tasks = tasks;
        this.created_on = created_on;
    }

}