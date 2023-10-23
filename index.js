import express from "express"
import mysql from 'mysql2/promise'
import mongoose from "mongoose";

const app = express();

// const dbConnection = mysql.createPool({
//   host:'localhost',
//   port:7777,
//   user:'root',
//   password:'1234',
  
// })

// const data = await dbConnection.query('SELECT 1+1');
// console.log(data)

// const mongoConnection = await mongoose.connect('mongodb://localhost:6666/twitchdb')
// console.log(mongoConnection.connection)

app.use('/', async (req, res)=>{
  res.send('Hola Mundo hehehe')
})

app.listen(4000, (err, res) => {
  console.log('app running on port', 3001)
})
