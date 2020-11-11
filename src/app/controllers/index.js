import Interactors from '../interactors/index';
import TodoListController from './todoList';

export default class Controllers {
    
    interactors = new Interactors();

    todoListController = new TodoListController(this.interactors);

    constructor() {
    }

}