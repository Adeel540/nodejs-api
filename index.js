
//const cors=require('cors')
const express = require('express');
const app = express();

const connect = require('./conection/conection')
const router=require('./routes/routes')
connect()
app.use(express.json());
app.use('/api',router);
//app.use(cors());


const PORT =process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is runiing${PORT}`)
});

//app.use('/api',routes);
// const mongoose=require('mongoose')
// const url="mongodb://localhost:27017/university"
// mongoose.connect(url).then((res)=>{
//     console.log("conected db")
// }).catch((err)=>{
//     console.log('some issue')
// })
//const bodyparser = require("body-parser")

//const conectDB = require("./configmodel/db");
//const dotenv =require('dotenv')

//const postrouter = require('./router/post');

// app.use(bodyparser.json())
// app.use(postrouter)
// dotenv.config();

// conectDB();


