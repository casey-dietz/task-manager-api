const mongoose = require('mongoose')

// Defining a new task model
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

// Headers are nothing more than key value pairs which allow you to attach meta information to the request. We can have as many headers as we need. 

const Task = mongoose.model('Task', taskSchema)

module.exports = Task