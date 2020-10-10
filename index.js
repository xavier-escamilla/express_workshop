const express = require('express');
const app = express();

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido al servidor del curso de Node.js");
});

app.get("/:name", (req, res, next) => {
    console.log(req.params.name);
    res.status(200);
    res.send("Hola, " + req.params.name);
});

app.listen(3000, () => {
    console.log("Server is running...")
});