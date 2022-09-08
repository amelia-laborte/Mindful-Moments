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

const MindfulMoments = mongoose.model("MindfulMoment", MindfulMomentsSchema);

module.exports = MindfulMoments;
