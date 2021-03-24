const express = require('express')
const fs = require("fs");
const cors = require("cors")
const app = express()
const port = 8000;

app.use(cors())

app.get('/api/knowledgeBase/', (req, res) => {
  const contents = fs.readFileSync("./knowledge.json");
  const knowledgeArticles=JSON.parse(contents);
  const query = req.query.search;
    if(query)
  res.send(knowledgeArticles.articles.filter(knowledge => knowledge.title.toLowerCase().includes(query.toLowerCase())));
    
})
app.get('/api/knowledgeBase/:id', (req, res) => {
  const contents = fs.readFileSync("./knowledge.json");
  const knowledgeArticles=JSON.parse(contents);
  res.send(knowledgeArticles.articles.find(art=>art.id == req.params.id))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})