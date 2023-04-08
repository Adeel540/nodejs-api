const mongoose = require('mongoose');
const postschema =new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String

    }
},{
    timestamps:true
})
module.exports= mongoose.model('post',postschema)