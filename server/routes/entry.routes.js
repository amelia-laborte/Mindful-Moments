const EntryController = require("../controllers/entry.controller")

module.exports = (app) => {
    app.get("/api/entry", EntryController.getEntries);
    app.get("/api/entry/:id", EntryController.getEntryById);
    app.post("/api/entry/create", EntryController.createEntry);
    app.put("/api/entry/:id", EntryController.updateEntry);
    app.delete("/api/entry/:id", EntryController.deleteEntry);
}