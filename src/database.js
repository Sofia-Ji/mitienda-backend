const mongoose = require("mongoose");

mongoose
.connect("mongodb+srv://sofia:sofia2022@cluster0.jkbo3cn.mongodb.net/mitienda?retryWrites=true&w=majority")
.then(console.log("conecto con la base de datos"))
.catch(err => console.log("conecto con la base de datos" +err))