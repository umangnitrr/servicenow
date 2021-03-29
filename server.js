const express = require('express')
const fs = require("fs");
const cors = require("cors")
const app = express()
const port = 8000;
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/faqs/', (req, res) => {
  const contents = fs.readFileSync("./knowledge.json");
  const knowledgeArticles = JSON.parse(contents);


  res.send(knowledgeArticles.articles.slice(0, 5));


})

app.get('/api/knowledge/', (req, res) => {
  const contents = fs.readFileSync("./knowledge.json");
  const knowledgeArticles = JSON.parse(contents);
  const query = req.query.search;
  if (query)
    res.send(knowledgeArticles.articles.filter(knowledge => knowledge.title.toLowerCase().includes(query.toLowerCase())));
  else
    res.send(knowledgeArticles.articles)

})
app.get('/api/knowledge/:id', (req, res) => {
  const contents = fs.readFileSync("./knowledge.json");
  const knowledgeArticles = JSON.parse(contents);
  res.send(knowledgeArticles.articles.find(art => art.id == req.params.id))
})

app.post('/api/ticket/', (req, res) => {
  var body = req.body;
  var filePath = './ticket.json';

  const tickets = JSON.parse(fs.readFileSync(filePath));
  const ticket = { ...body, createdOn: new Date(), id: new Date().getTime() };
  fs.writeFileSync(filePath, JSON.stringify([...tickets, ticket], undefined, 2))

  res.send(ticket)

})


app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`)
})