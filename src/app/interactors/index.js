import TodoListInteractor from './todoList/index';
import Database from '../../database/index';

export default class Interactors {

    database = new Database();

    todoListInteractor = new TodoListInteractor(this.database);

}