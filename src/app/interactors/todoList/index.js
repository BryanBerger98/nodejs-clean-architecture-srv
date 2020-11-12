import CreateTodoList from './createTodoList';
import DeleteTodoListById from './deleteTodoListById';
import GetAllTodoLists from './getAllTodoLists';
import GetTodoListById from './getTodoListById';
import SendCompletedTodoListEmail from './sendCompletedTodoListEmail';
import SendCompletedTodoListEmailByTodoListId from './sendCompletedTodoListEmailByTodoListId';
import UpdateTodoList from './updateTodoList';

export default class TodoListInteractor {

    constructor(todoListRepository, emailsService) {
        this.createTodoList = new CreateTodoList(todoListRepository);
        this.getTodoListById = new GetTodoListById(todoListRepository);
        this.getAllTodoLists = new GetAllTodoLists(todoListRepository);
        this.updateTodoList = new UpdateTodoList(todoListRepository);
        this.deleteTodoListById = new DeleteTodoListById(todoListRepository);
        this.sendCompletedTodoListEmail = new SendCompletedTodoListEmail(emailsService);
        this.sendCompletedTodoListEmailByTodoListId = new SendCompletedTodoListEmailByTodoListId(todoListRepository, emailsService);
    }

}