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
  const knowledgeArticles=JSON.parse(contents);
  
    
  res.send(knowledgeArticles.articles.slice(0,5));
  
    
})

app.get('/api/knowledgeBase/', (req, res) => {
  const contents = fs.readFileSync("./knowledge.json");
  const knowledgeArticles=JSON.parse(contents);
  const query = req.query.search;
    if(query)
  res.send(knowledgeArticles.articles.filter(knowledge => knowledge.title.toLowerCase().includes(query.toLowerCase())));
  else
  res.send(knowledgeArticles.articles)
    
})
app.get('/api/knowledgeBase/:id', (req, res) => {
  const contents = fs.readFileSync("./knowledge.json");
  const knowledgeArticles=JSON.parse(contents);
  res.send(knowledgeArticles.articles.find(art=>art.id == req.params.id))
})

app.post('/api/tickets/', (req, res) => {
  var body = JSON.parse(req.body)
    var filePath =  './ticket.json';
    req.on('data', function(data) {
        console.log(data);

    });

    req.on('end', function (){
        fs.appendFile(filePath, body, function() {
          res.end();
        });
    });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})