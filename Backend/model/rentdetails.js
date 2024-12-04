const mongoose=require('mongoose');
const rentSchema=mongoose.Schema({

    Email: {
        type: String,
        required: true,
        trim: true
      },
      Book: {
        type: String,
        required: true,
        trim: true
      },
      Status: {
        type: String,
        default: 'pending',
        trim: true
      }
 
})
const rentdetails=mongoose.model('rentrequest',rentSchema);
module.exports=rentdetails;