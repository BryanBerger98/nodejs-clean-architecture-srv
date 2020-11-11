import mongoose from 'mongoose';

const todoListSchema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
    tasks: {type: [{
        title: {type: String, default: ''},
        description: {type: String, default: ''},
        done: {type: Boolean, default: false}
    }]},
    created_on: {type: Date, default: Date.now()},
    created_by: {type: mongoose.Schema.Types.ObjectId, default: null}
});

todoListSchema.statics = {
    objectId: (id) => {
        return new mongoose.Types.ObjectId(id);
    }
}

export default mongoose.model('todoList', todoListSchema);