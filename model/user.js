const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    
    postid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    },

    email:{
        type:String
    }
},{
    timestamps:true

  
});
module.exports = mongoose.model('user',userschema);
