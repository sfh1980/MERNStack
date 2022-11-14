const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "Authors";


//MIDDLEWARE-CONFIG EXPRESS
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

//CONNECT TO DB USING MONGOOSE
require("./config/mongoose.config")(DB)

//MODULARIZE ROUTES
require("./routes/authors.routes")(app)


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));