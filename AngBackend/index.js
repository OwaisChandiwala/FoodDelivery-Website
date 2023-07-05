const express = require('express')
const app = express(); // creating app object


const cors = require('cors')
app.use(cors());

//Body Parser Library -- used to add data from form -- npm install body-parser
const bodyParser = require('body-parser')
// app.use(bodyparser.json())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



mongodb

app.get('/',(req,res)=>{
  res.send("<h1 style = 'color:coral; background-color:black;'>Welcome to Backend Server</h1>")
}) // By default route jispe above text show krega

//burger api
const burgersrouter = require('./routes/burgersroute')
app.use('/burgers', burgersrouter)


//pizza api
const pizzaroute = require('./routes/pizzaroute')
app.use('/pizza', pizzaroute)


// //burger api
const shawarmaroute = require('./routes/shawarmaroute')
app.use('/shawarma', shawarmaroute)



// // cart API
const cartRoute = require('./routes/cartRoute')
app.use('/cart',cartRoute)


app.listen(4500, ()=>{
  console.log("Server is Listening")
})
