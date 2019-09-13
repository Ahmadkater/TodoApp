const mongoose = require('mongoose');

const taskschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', taskschema);

module.exports = Task;