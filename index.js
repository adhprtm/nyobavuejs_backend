const express = require('express')
var cors = require('cors')
const app = express();
const port = 443;
app.use(express.json());
app.use(cors())

app.get("/getlist", (req, res) => {
    res.send({sensor_suhu:[{suhu: 78, waktu:12.05}, {suhu: 73, waktu:12.36}, {suhu: 71, waktu:12.45}]})
});
app.post("/sensorpost", (req, res) => {
    res.send(
        "suhu yang diterima adalah " +
        req.body.suhu + "\n" +
        "kelembapan yang diterima adalah " +
        req.body.kelembapan
    )
});
app.get("/sensor2", (req, res) => {
    res.send("sensor2")
});
app.get("/sensor3", (req, res) => {
    res.send({ sensor3: 100 })
})
app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});