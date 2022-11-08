const Jokes_APIController = require("../controllers/jokes_api.controller");

module.exports = app => {
    //ALL
    app.get('/api/jokes_api', Jokes_APIController.findAllJokes_API); 
    //RANDOM
    app.get('/api/jokes_api/random', Jokes_APIController.findRandomJokes_API)
    //ONE
    app.get('/api/jokes_api/:id', Jokes_APIController.findOneSingleJokes_API);
    //CREATE
    app.post('/api/jokes_api', Jokes_APIController.createNewJokes_API);
    //UPDATE
    app.put('/api/jokes_api/:id', Jokes_APIController.updateExistingJokes_API);
    //DELETE
    app.delete('/api/jokes_api/:id', Jokes_APIController.deleteAnExistingJokes_API);
}