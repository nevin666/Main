const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    Name:String,
    Place:String,
    Age:Number,
    Email:String,
    Education:String,
    Phone:Number,
    Address:String,
    Password:String

 
})
const userdetails=mongoose.model('userdetail',userSchema);
module.exports=userdetails;