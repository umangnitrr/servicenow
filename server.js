const express = require('express')
var fs = require("fs");

const app = express()
const port = 3000;


app.get('/api/knowledgeBase/', (req, res) => {
   
    var contents = fs.readFileSync("./knowledge.json");
    var knowledgeArticles=JSON.parse(contents);
    var query = req.query.search;
    if(query)
  res.send(knowledgeArticles.articles.filter(knowledge => knowledge.title.toLowerCase().includes(query.toLowerCase())));
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})