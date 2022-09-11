const Entry = require("../models/entry.model");

module.exports ={
    getEntries: (req,res) => {
        Entry.find({})
        .then((allEntries)=>{
            console.log(allEntries);
            res.json(allEntries);
        })
        .catch((err)=>
        res
            .status(400)
            .json({ message: "Something went wrong with findAll", error: err.errors })
        )
    },
    createEntry: (req,res) =>{
        Entry.create(req.body)
            .then((newEntry)=>{
                console.log(newEntry);
                res.json(newEntry)
            })
            .catch((err)=>
            res
                .status(400)
                .json({message:"Something went wrong with the create", error: err.errors})
            )
    },
    getEntryById: (req,res) =>{
        Entry.findOne({_id: req.params.id})
            .then((entry)=>{
                console.log(entry);
                res.json(entry);
            })
            .catch((err)=>
            res
            .status(400)
            .json({message: "Something went wrong with findOne", error: err.errors})
            );
    },
    deleteEntry: (req,res)=>{
        Entry.deleteOne({_id: req.params.id})
            .then((entry)=>{
                console.log(entry);
                res.json(entry);
            })
            .catch((err)=>
            res
            .status(400)
            .json({message: "Something went wrong with deleteOne", error:err.errors})
            );
    },
    updateEntry: (req,res)=>{
        Entry.updateOne({_id: req.params.id}, req.body,{
            new: true,
            runValidators: true,
        })
        .then((entry)=>{
            console.log(entry);
            res.json(entry);
        })
        .catch ((err)=>
        res
            .status(400)
            .json({message:"Something went wrong with updateOne", error: err.errors})
        )
    }
};