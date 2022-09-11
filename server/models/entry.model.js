const mongoose = require("mongoose");

const MindfulMomentsSchema = mongoose.Schema(
    {
        journalEntry:{
            type: String,
            required: [true, "If you intend to practice gratitude, an entry is required"]
        }
        
    },
    { timestamps: true}
);

const Entry = mongoose.model("Entry", MindfulMomentsSchema);

module.exports = Entry;
