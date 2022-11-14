const AuthorsController = require("../controllers/authors.controller")
// console.log(Author)

module.exports = app => {
    //ALL
    app.get('/api/authors', AuthorsController.findAllAuthors);
    
    // //RANDOM
    // app.get('/api/jokes_api/random', Jokes_APIController.findRandomJokes_API)
    
    //ONE
    app.get('/api/author/:id', AuthorsController.findOneSingleAuthor);

    //CREATE
    app.post('/api/author', AuthorsController.createNewAuthor);

    //UPDATE
    app.put('/api/author/:id', AuthorsController.updateExistingAuthor);

    //DELETE
    app.delete('/api/author/:id', AuthorsController.deleteAnExistingAuthor);
}