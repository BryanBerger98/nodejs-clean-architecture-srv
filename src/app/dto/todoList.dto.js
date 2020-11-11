export default class TodoListDto {

    constructor({_id, title, completed, tasks, created_on, created_by}) {
        this._id = _id;
        this.title = title;
        this.completed = completed;
        this.tasks = tasks;
        this.created_on = created_on;
        this.created_by = created_by;
    }

}