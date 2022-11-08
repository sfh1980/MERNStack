const mongoose = require('mongoose');

const Jokes_APISchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Dude! Where's the setup?"],
        minlength: [10, "Setup must be at least 10 characters."]
    },
    punchline: {
        type: String,
        required: [true, "C'mon! A joke isnt a joke without a punchline!"],
        minlength: [3, "Punchline must be at least 3 characters."]
    }
}, {timestamps: true});

const Jokes_API = mongoose.model('Jokes_API', Jokes_APISchema);

module.exports = Jokes_API;