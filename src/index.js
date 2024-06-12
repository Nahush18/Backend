// require('dotenv').config({path: './env'}) 
import dotenv from 'dotenv'
import connectDB from './db/index.js';


dotenv.config({
    path: '../.env'
})




connectDB()










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
