const express = require('express');
const app = express();

app.get('/books',allbooks,(req, res) => {
 return res.send("books")
})

app.get("/book/:name",singleBook,(req, res) => {
    return res.send({bookName: req.name})
})

function allbooks(req, res,next){
    console.log("Fetching all books");
    next();
}
 function singleBook(req, res, next){
    //  return req.name=req.params.name;
    console.log("its middleware singleBook")
     req.name=req.params.name;
     next();
 }


app.listen(3500,(req, res) => {
    console.log('listening on port 3500')
});