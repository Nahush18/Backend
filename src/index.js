// require('dotenv').config({path: './env'}) 
import dotenv from 'dotenv'
import connectDB from './db/index.js';


dotenv.config({
    path: '../.env'
})




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000)
    console.log(`Server is running at port: ${process.env.PORT}`);
    app.on("error",(err) => {
        console.log(err);
        throw err
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !",err);
})























/*

// Approach 2 to connect database
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.log(error);
        throw err
    }
})() //IIFE (Immediately Invoked Function Expression)

*/
