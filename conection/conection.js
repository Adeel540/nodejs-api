require('dotenv').config();
const {build} = require('module');
const mongoose = require('mongoose');
const dburl=process.env.DB_url;

const connect = function(){
    mongoose.connect(dburl).then((val)=>{
        console.log('db conect');
    }).catch((err)=>{
        console.log('error')

    })

}
module.exports=connect;