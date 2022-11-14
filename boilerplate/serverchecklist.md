# Server Checklist

* create Project Folder
* open Terminal and cd to Project Folder
```
code . 
```
* CREATE server folder
* cd to server folder
* Create server.js in server folder
* open Terminal in new isolated VS Code session
``` javascript
npm init -y
```
```
npm install express mongoose cors
```
* CREATE .gitignore and add node_modules. Save/Close
* Create file structure in server folder
* EXAMPLE: rt click> New File > controllers/tableName.controller.js
    * config
        * mongoose.config.jsx
    * controllers
        * tableName.controller.jsx
    * models
        * tableName.model.jsx
    * routes
        * tableName.routes.jsx

# File Boilerplates (DONT FORGET TO REFACTOR)

* server.js
```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "DB name";


//MIDDLEWARE-CONFIG EXPRESS
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

//CONNECT TO DB USING MONGOOSE
require("./server/config/mongoose.config")(DB)

//MODULARIZE ROUTES
require("./server/routes/product.routes")(app)


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
```


* mongoose.config.js
```javascript
const mongoose = require('mongoose');

module.exports = (DB) => {
    mongoose.connect("mongodb://127.0.0.1:27017/" + DB)
        .then(() => console.log(`Established a connection to the ${DB} database`))
        .catch(err => console.log(`Something went wrong when connecting to the ${DB} database`, err));
}
```

* tableName.controller.js
```javascript
const Product = require("../models/product.model")


//ALL
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json({ products: allDaProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//ONE
module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}


//CREATE
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//UPDATE
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//DELETE
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
```

* tableName.model.js
```javascript
const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be filled out"],
        minlength: [3, "{PATH} must be at least 3 characters"]

    },
    price: {
        type: Number,
        required: [true, "{PATH} must be filled out"],
        
    },
    description: {
        type: String,
        required: [true, "{PATH} must be filled out"],
        minlength: [20, "{PATH} must be at least 20 characters"]
    }
}, {timestamps:true});
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;
```

* tableName.routes.js
```javascript
const ProductController = require("../controllers/product.controller")
// console.log(Product)

module.exports = app => {
    //ALL
    app.get('/api/products', ProductController.findAllProducts);
    
    // //RANDOM
    // app.get('/api/jokes_api/random', Jokes_APIController.findRandomJokes_API)
    
    //ONE
    app.get('/api/product/:id', ProductController.findOneSingleProduct);

    //CREATE
    app.post('/api/product', ProductController.createNewProduct);

    //UPDATE
    app.put('/api/product/:id', ProductController.updateExistingProduct);

    //DELETE
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
}
```


# TEST DB CONNECTIVITY USING......
```javascript
nodemon server.js
```
# TEST SERVER USING POSTMAN
