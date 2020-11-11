import mongoose from 'mongoose';
import todoListSchema from './schemas/TodoListSchema';
import { environment } from '../env';

export default class Database {

    todoListSchema = todoListSchema;

    constructor() {
        this.initMongooseConnection();
    }

    initMongooseConnection() {
        mongoose.connect(environment.DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch((error) => {
            if (error) {
                console.error('MongoDB Error:', error);
                process.exit(1);
            }
        });
    }

}