export default class TodoListsData {

    constructor(TodoListSchema) {
        this.TodoListSchema = TodoListSchema;
    }

    createTodoList(todoList) {
        return new Promise((resolve, reject) => {
            todoList = new this.TodoListSchema(todoList);
            todoList.save().then(resolve).catch(reject);
        });
    }

    getAllTodoLists() {
        return new Promise((resolve, reject) => {
            this.TodoListSchema.find({}, {created_by: -1}).exec().then(resolve).catch(reject);
        });
    }

    getTodoListById(id) {
        return new Promise((resolve, reject) => {
            this.TodoListSchema.findById(id).exec().then(resolve).catch(reject);
        });
    }

    updateTodoList(todoList) {
        return new Promise((resolve, reject) => {
            this.TodoListSchema.findOneAndUpdate({ _id: todoList._id }, { $set: {...todoList} }, {upsert: true, new: true}).exec()
            .then(resolve).catch(reject);
        });
    }

    deleteTodoListById(id) {
        return new Promise((resolve, reject) => {
            this.TodoListSchema.findOneAndDelete({ _id: id }).exec()
            .then(resolve).catch(reject);
        });
    }

}