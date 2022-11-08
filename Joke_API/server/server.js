const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokes_api"



//MIDDLEWARE-CONFIG EXPRESS
app.use( express.json(), express.urlencoded({ extended: true }));

//CONNECT TO DB USING MONGOOSE
require("./config/mongoose.config")(DB)

//MODULARIZE ROUTES
require("./routes/jokes_api.routes")(app)

app.listen(PORT, () => console.log("server up on PORT:", PORT))