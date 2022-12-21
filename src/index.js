require("./database");
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

//configuraciones para trabajar con peticiones HTTP post, get, delete, put 
app.use(cors());
app.use(express.json());

//rutas
app.use('/',require('./routers/rtrCliente'));

app.listen(PORT,(req,res) => {
    console.log("servidor trabajando en el puerto: ",PORT)

})






