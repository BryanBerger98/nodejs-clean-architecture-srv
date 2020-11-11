import TodoListsData from '../../data-access/todoLists';
import EmailsService from '../../services/emailsService';
import CreateTodoList from './createTodoList';
import DeleteTodoListById from './deleteTodoListById';
import GetAllTodoLists from './getAllTodoLists';
import GetTodoListById from './getTodoListById';
import SendCompletedTodoListEmail from './sendCompletedTodoListEmail';
import SendCompletedTodoListEmailByTodoListId from './sendCompletedTodoListEmailByTodoListId';
import UpdateTodoList from './updateTodoList';

export default class TodoListInteractor {

    constructor({todoListSchema}) {
        const todoListsData = new TodoListsData(todoListSchema);
        const emailsService = new EmailsService();
        this.createTodoList = new CreateTodoList(todoListsData);
        this.getTodoListById = new GetTodoListById(todoListsData);
        this.getAllTodoLists = new GetAllTodoLists(todoListsData);
        this.updateTodoList = new UpdateTodoList(todoListsData);
        this.deleteTodoListById = new DeleteTodoListById(todoListsData);
        this.sendCompletedTodoListEmail = new SendCompletedTodoListEmail(emailsService);
        this.sendCompletedTodoListEmailByTodoListId = new SendCompletedTodoListEmailByTodoListId(todoListsData, emailsService);
    }

}