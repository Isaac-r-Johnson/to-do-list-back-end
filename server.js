const express = require('express');
const bodyParser = require('body-parser');
const fs = require('node:fs');

const app = express();
app.use(bodyParser.json({ extended: true }));

const port = 8080

app.get("/tasks", (req, res) => {
    fs.readFile(__dirname + "/data.txt", 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/remove', (req, res) => {
    const tasksToWrite = req.body.tasks;
    fs.writeFile(__dirname + "/data.txt", tasksToWrite, () => res.send("Done"));
});

app.post('/add', (req, res) => {
    const newTasksToWrite = req.body.tasks;
    console.log(newTasksToWrite);
    fs.writeFile(__dirname + "/data.txt", newTasksToWrite, () => res.send("Done"));
});

app.listen(port, () => {
    console.log("Server started on port " + port)
});