import TodoListInteractor from './todoList/index';
import EmailsService from '../../services/emailsService';
import Database from '../../database/index';

export default class Interactors {

    database = new Database();
    emailsService = new EmailsService();

    todoListInteractor = new TodoListInteractor(this.database.todoListRepository, this.emailsService);

}