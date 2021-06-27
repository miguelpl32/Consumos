
const mongodb = require("mongodb").MongoClient;
const Consumo = require('../models/Consumo');

const fs = require("fs");
const path = require('path');
const fastcsv = require("fast-csv");


exports.crearConsumo = async (req, res) => {
    try {
        // crear el consumo
        consumo2 = new Consumo(req.body)
        await consumo2.save();
        res.send(consumo2)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerConsumos = async (req, res) => {
    try {

        const consumos = await Consumo.find();
        res.json(consumos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarConsumo = async (req, res) => {
    try {

        const { fecha, hora, consumo, precioKwh, costeHora } = req.body;
        let consumoNow = await Consumo.findById(req.params.id);

        if (!consumoNow) {
            res.status(404).json({ msg: 'No Existe el consumo' })
        }
        consumoNow.fecha = fecha;
        consumoNow.hora = hora;
        consumoNow.consumo = consumo;
        consumoNow.precioKwh = precioKwh;
        consumoNow.costeHora = costeHora;

        consumoNow = await Consumo.findOneAndUpdate({ _id: req.params.id }, consumoNow, { new: true })
        res.json(consumoNow);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerConsumo = async (req, res) => {
    try {

        let consumoNow = await Consumo.findById(req.params.id);

        if (!consumoNow) {
            res.status(404).json({ msg: 'No Existe el consumo' })
        }

        res.json(consumoNow);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarConsumo = async (req, res) => {
    try {


        let consumoNow = await Consumo.findById(req.params.id);

        if (!consumoNow) {
            res.status(404).json({ msg: 'No Existe el consumo' })
        }

        await Consumo.findOneAndRemove({ _id: req.params.id })

        res.json({ msg: 'Consumo eliminado con exito' });


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.uploadCsv = async (req, res) => {
    let archivo = req.file;

    const ruta = path.join(__dirname, `../temp/${archivo.filename}`)


    let stream = fs.createReadStream(ruta);
    let csvData = [];
    let csvStream = fastcsv
        .parse()
        .on("data", function (data) {
            csvData.push({
                fecha: new Date(data[0]),
                hora: parseFloat(data[1]),
                consumo: parseFloat(data[2]),
                precioKwh: parseFloat(data[3]),
                costeHora: parseFloat(data[4])
            });
        })
        .on("end", function () {
            // remove the first line: header
            csvData.shift();

            // save to the MongoDB database collection
            mongodb.connect(
                process.env.DB_MONGO,
                { useNewUrlParser: true, useUnifiedTopology: true },
                (err, client) => {
                    if (err) throw err;

                    client
                        .db("datosconsumos")
                        .collection("consumos")
                        .insertMany(csvData, (err, res) => {
                            if (err) throw err;

                            console.log(`Inserted: ${res.insertedCount} rows`);

                            client.close();
                            fs.unlinkSync(ruta);
                        });
                }
            );
        });

    stream.pipe(csvStream);
    res.status(201).json({ success: true })


}

