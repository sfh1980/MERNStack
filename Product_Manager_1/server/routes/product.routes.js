const ProductController = require("../controllers/product.controller")
// console.log(Product)

module.exports = app => {
    //ALL
    app.get('/api/product', ProductController.findAllProducts); 
    
    //ONE
    app.get('/api/product/:id', ProductController.findOneSingleProduct);

    //CREATE
    app.post('/api/product', ProductController.createNewProduct);

    //UPDATE
    app.put('/api/product/:id', ProductController.updateExistingProduct);

    //DELETE
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
}