const Entry = require("../models/entry.model");

module.exports ={
    getEntries: (req,res) => {
        Entry.find({})
        .then((allEntries)=>{
            console.log(allEntries);
            res.json(allEntries);
        })
        .catch((err)=>{
        res
            .status(400)
            .json({ message: `Something went wrong with findAll`, error: err.errors })
        })
    },
    createEntry: (req,res) =>{
        Entry.create(req.body)
            .then((newEntry))
    }
}