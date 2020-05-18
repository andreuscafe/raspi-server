var express = require('express');
var app = express();

'use strict';

const fs = require('fs');

var mierda;

fs.readFile('mierda.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);

    mierda = student;
});

app.get('/', function (req, res) {
  res.send(mierda);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
