import TodoListEntity from '../../entities/TodoListEntity';

export default class SendCompletedTodoListEmail {

    constructor(emailsService) {
        this.emailsService = emailsService;
    }

    execute(todoList) {
        return new Promise((resolve, reject) => {
            todoList = new TodoListEntity(todoList);
            const emailSubject = 'Votre liste ' + todoList.title + ' a été complétée !';
            const emailPlainText = 'Félicitations ! Vous avez terminé les ' + todoList.tasks.length + ' de votre liste intituliée ' + todoList.title;
            const htmlBody = '<p>Félicitations ! Vous avez terminé les ' + todoList.tasks.length + ' de votre liste intituliée ' + todoList.title + '</p>';
            this.emailsService.sendEmail('test@test.fr', '', emailSubject, emailPlainText, htmlBody).then(resolve).catch(reject);
        });
    }

}