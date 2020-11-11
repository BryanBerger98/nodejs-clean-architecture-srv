import CreateTodoList from './createTodoList';
import DeleteTodoListById from './deleteTodoListById';
import GetAllTodoLists from './getAllTodoLists';
import GetTodoListById from './getTodoListById';
import SendCompletedTodoListEmail from './sendCompletedTodoListEmail';
import SendCompletedTodoListEmailByTodoListId from './sendCompletedTodoListEmailByTodoListId';
import UpdateTodoList from './updateTodoList';

export default class TodoListController {
 
    constructor({todoListInteractor}) {
        this.createTodoList = new CreateTodoList(todoListInteractor);
        this.getTodoListById = new GetTodoListById(todoListInteractor);
        this.getAllTodoLists = new GetAllTodoLists(todoListInteractor);
        this.updateTodoList = new UpdateTodoList(todoListInteractor);
        this.deleteTodoListById = new DeleteTodoListById(todoListInteractor);
        this.sendCompletedTodoListEmail = new SendCompletedTodoListEmail(todoListInteractor);
        this.sendCompletedTodoListEmailByTodoListId = new SendCompletedTodoListEmailByTodoListId(todoListInteractor);
    }

}