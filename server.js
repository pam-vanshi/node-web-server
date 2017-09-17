const express = require('express')
const hbs = require('hbs');
const port = process.env.PORT || 3000;



var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'));
app.get('/', (req,res) => {
  //res.send('<html><body><h1>Hello Bhopadi!</h1></body></html>');
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear()
  })
})
app.get('/about',(req,res) => {
 res.render('about.hbs',{
   pageTitle: 'chup be lodu',
   currentYear: new Date().getFullYear()
 })
})
app.get('/bad',(req,res) => {
 res.send({
   errorMessage: 'bhai url change kro bc'
 })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
