const express = require('express');
const app = express();
const PORT = 8000;
const DB = "product"
const cors = require('cors')


//MIDDLEWARE-CONFIG EXPRESS
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

//CONNECT TO DB USING MONGOOSE
require("./server/config/mongoose.config")(DB)

//MODULARIZE ROUTES
require("./server/routes/product.routes")(app)

    
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`) );