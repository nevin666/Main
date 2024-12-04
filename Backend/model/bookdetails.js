const mongoose=require('mongoose');
const bookSchema=mongoose.Schema({

    Image:String,
    Name:String,
    Author:String,
    Description:String,
 
})
const bookdetails=mongoose.model('bookdetail',bookSchema);
module.exports=bookdetails;