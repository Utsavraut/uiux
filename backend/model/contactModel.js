const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: false,
    },
    subject: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: true,
    },
    
   
});

const Contact = mongoose.model("contact", contactSchema);
module.exports = Contact;
