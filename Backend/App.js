const express=require('express')
const app=new express()
require('./connection')
const cors=require('cors')
app.use(express.json())
const bookmodel=require('./model/bookdetails')
const usermodel=require('./model/userdetails')
const rentmodel=require('./model/rentdetails')
app.use(cors())
app.get('/books',async(req,res)=>{
    try{const data=await bookmodel.find()
        res.send(data)
    }
    catch(error){console.log('data not found')}
})
app.post('/addbook',async(req,res)=>{
    try{var item=req.body;
        const datasave=new bookmodel(item);
        const saveddata=await datasave.save();
        res.send('post successfull')
    }
    catch(error){
        console.log('error')
    }
})
app.put('/editbook/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
  
      // Validate ID and updateData
      if (!id || !updateData) {
        return res.status(400).send('Invalid request: missing ID or data');
      }
  
      // Find and update the book by ID
      const updatedBook = await bookmodel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  
      // Check if the book was found and updated
      if (!updatedBook) {
        return res.status(404).send('Book not found');
      }
  
      // Send success response
      res.send(updatedBook);
    } catch (error) {
      // Log the error and send a response
      console.error('Error updating book:', error);
      res.status(500).send('Server error');
    }
  });
app.delete('/deletebook/:id',async(req,res)=>{
    try{
        await bookmodel.findByIdAndDelete(req.params.id);
        res.send('deleted successfully')}
        catch(error){
            console.log(error)
        }
        
    })

    app.get('/user',async(req,res)=>{
        try{const data=await usermodel.find()
            res.send(data)
        }
        catch(error){console.log('data not found')}
    })
    app.post('/adduser',async(req,res)=>{
        try{var item=req.body;
            const datasave=new usermodel(item);
            const saveddata=await datasave.save();
            res.send('post successfull')
        }
        catch(error){
            console.log('error')
        }
    })
    app.put('/edituser/:id',async(req,res)=>{
        try{
            const data=await usermodel.findByIdAndUpdate(req.params.id,req.body);
            res.send('updataed successfully');
        }
        catch(error){
            console.log(error);
        }
    })
    app.delete('/deleteuser/:id',async(req,res)=>{
        try{
            await usermodel.findByIdAndDelete(req.params.id);
            res.send('deleted successfully')}
            catch(error){
                console.log(error)
            }
            
        })

       // Create rental request
       app.get('/rental',async(req,res)=>{
        try{const data=await rentmodel.find()
            res.send(data)
        }
        catch(error){console.log('data not found')}
    })
    app.post('/addrequest',async(req,res)=>{
        const {Email,Book,Status}=req.body;
       
        try {
            // Create a new rental request document
            const dataSave = new rentmodel({
              Email: Email,
              Book: Book,
              Status: Status || 'pending' // Default status if not provided
            });
        
            // Save the rental request to the database
            const savedData = await dataSave.save();
            
            // Log and respond with success
            console.log('Saved Data:', savedData);
            res.status(201).json(savedData); // Send the saved data back to the client
          } catch (error) {
            // Log and respond with error
            console.error('Error saving data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
        });
    app.delete('/deleterequest/:id',async(req,res)=>{
        try{
            await rentmodel.findByIdAndDelete(req.params.id);
            res.send('deleted successfully')}
            catch(error){
                console.log(error)
            }
            
        })
        app.put('/editrequest/:id',async(req,res)=>{
           
            try{
                const data=await rentmodel.findByIdAndUpdate(req.params.id,{Status:'Accepted'});
                res.send('updataed successfully');
            }
            catch(error){
                console.log(error);
            }
        })
        app.put('/rejectrequest/:id',async(req,res)=>{
           
            try{
                const data=await rentmodel.findByIdAndUpdate(req.params.id,{Status:'Rejected'},{new:true});
                res.send('updataed successfully');
            }
            catch(error){
                console.log(error);
            }
        })
app.listen(3000,()=>{console.log ('PORT IS RUNNING IN 3000')})




