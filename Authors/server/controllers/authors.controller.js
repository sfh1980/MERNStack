const Authors = require("../models/authors.model")


//ALL
module.exports.findAllAuthors = (req, res) => {
    Authors.find()
        .then(allDaAuthors => res.json({ authors: allDaAuthors }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//ONE
module.exports.findOneSingleAuthor = (req, res) => {
    Authors.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//CREATE
module.exports.createNewAuthor = (req, res) => {
    Authors.create(req.body)
        .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}


//UPDATE
module.exports.updateExistingAuthor = (req, res) => {
    Authors.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}


//DELETE
module.exports.deleteAnExistingAuthor = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}