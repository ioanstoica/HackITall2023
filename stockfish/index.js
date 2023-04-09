const express = require('express')
const ejs = require('ejs');
const fs = require('fs');
const app = express()
const port = 8081

app.use(express.static('src'))

const template = fs.readFileSync('src/index.ejs', 'utf8');
const data = { title: 'My Title', message: 'Hello My World!' };

const renderedTemplate = ejs.render(template, data);

app.get('/', (req, res) => {
   res.send(renderedTemplate)
})



let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', { people: people });

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})