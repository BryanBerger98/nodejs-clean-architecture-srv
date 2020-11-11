export default class TodoListEntity {

    constructor({_id, title, completed, tasks, created_on, created_by}) {
        this._id = _id;
        this.title = this.checkTitle(title);
        this.completed = completed ? completed : false;
        this.tasks = this.checkTasks(tasks);
        this.created_on = created_on;
        this.created_by = created_by ? created_by : null;
    }

    checkTitle(title) {
        if (!title) {
            throw new Error('title is required');
        }
        if (typeof title !== 'string') {
            throw new Error('title must be a string');
        }
        if (title === '') {
            throw new Error('title cannot be empty');
        }
        return title;
    }

    checkTasks(tasks) {
        if (!tasks) {
            return [];
        }
        if (tasks.length > 20) {
            throw new Error('number of tasks cannot exceed 20');
        }
        tasks.forEach(task => {
            if (!task.title) {
                throw new Error('task title is required');
            }
            if (typeof task.title !== 'string') {
                throw new Error('task title must be a string');
            }
            if (task.title === '') {
                throw new Error('task title cannot be empty');
            }
            task.done = task.done ? true : false;
        });
        return tasks;
    }

}