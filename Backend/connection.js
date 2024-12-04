const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://parvathyysalin:itsme@cluster0.84vpvmh.mongodb.net/bookDB?retryWrites=true&w=majority&appName=Cluster0').then(
    (res)=>{
        console.log('connected')}).catch((error)=>{console.log('error occured')})