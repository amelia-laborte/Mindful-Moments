const mongoose = require ("mongoose")
const dbMindfulMoments= "dbMindfulMoments"

mongoose
    .connect(`mongodb://localhost/${dbMindfulMoments}`)
    .then (()=>{
        console.log(`Connected to the db ${dbMindfulMoments}`);
    })
    .catch((err)=> console.log (`Error in database connection to ${dbMindfulMoments}`, err));