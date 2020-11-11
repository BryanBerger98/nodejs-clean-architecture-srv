import express from 'express';
import Controllers from './controllers';
import TodoListRoutes from './routes/todoList';
const app = express();

const controllers = new Controllers();

const todoListRoutes = new TodoListRoutes(controllers);

app.use('/todo-lists', todoListRoutes.router);

export default app;