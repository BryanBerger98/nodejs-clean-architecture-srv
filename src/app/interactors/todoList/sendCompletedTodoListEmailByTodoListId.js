export default class SendCompletedTodoListEmailByTodoListId {

    constructor(todoListsData, emailsService) {
        this.todoListsData = todoListsData;
        this.emailsService = emailsService;
    }

    execute(id) {
        return new Promise((resolve, reject) => {
            this.todoListsData.getTodoListById(id)
            .then(todoList => {
                const emailSubject = 'Votre liste ' + todoList.title + ' a été complétée !';
                const emailPlainText = 'Félicitations ! Vous avez terminé les ' + todoList.tasks.length + ' de votre liste intituliée ' + todoList.title;
                const htmlBody = '<p>Félicitations ! Vous avez terminé les ' + todoList.tasks.length + ' de votre liste intituliée ' + todoList.title + '</p>';
                this.emailsService.sendEmail('test@test.fr', '', emailSubject, emailPlainText, htmlBody).then(resolve).catch(reject);
            }).catch(reject)
        });
    }

}