import { Router } from 'express';

export default class TodoListRoutes {

    router = Router();

    constructor({todoListController}) {
        this.router.post('/create', todoListController.createTodoList);
        this.router.get('/get/all', todoListController.getAllTodoLists);
        this.router.get('/get/:id', todoListController.getTodoListById);
        this.router.put('/update', todoListController.updateTodoList);
        this.router.delete('/delete/:id', todoListController.deleteTodoListById);
        this.router.post('/send-complete-todo-list-email', todoListController.sendCompletedTodoListEmail);
        this.router.get('/send-complete-todo-list-email/:id', todoListController.sendCompletedTodoListEmailByTodoListId);
    }

}