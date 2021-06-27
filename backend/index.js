const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creamos el servidor

const app = express();

conectarDB();

app.use(cors());

app.use(express.json());


app.use('/consumos', require('./routes/consumo'));


app.listen(3000, () => {
    console.log("El servidor esta corriendo");
})

