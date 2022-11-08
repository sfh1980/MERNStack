const Jokes_API = require('../models/jokes_api.model');


//ALL
module.exports.findAllJokes_API = (req, res) => {
    Jokes_API.find()
        .then(allDaJokes_API => res.json({ jokes_api: allDaJokes_API }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//ONE
module.exports.findOneSingleJokes_API = (req, res) => {
    Jokes_API.findOne({ _id: req.params.id })
        .then(oneSingleJokes_API => res.json({ jokes_api: oneSingleJokes_API }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//CREATE
module.exports.createNewJokes_API = (req, res) => {
    Jokes_API.create(req.body)
        .then(newlyCreatedJokes_API => res.json({ jokes_api: newlyCreatedJokes_API }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//UPDATE
module.exports.updateExistingJokes_API = (req, res) => {
    Jokes_API.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJokes_API => res.json({ jokes_api: updatedJokes_API }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//DELETE
module.exports.deleteAnExistingJokes_API = (req, res) => {
    Jokes_API.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//RANDOM
module.exports.findRandomJokes_API = (req, res) => {
    // Jokes_API.aggregate([{$sample: {size:1}}])
    Jokes_API.aggregate.sample(1)
    .then(oneRandomJokes_API => res.json({jokes_api: oneRandomJokes_API}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}