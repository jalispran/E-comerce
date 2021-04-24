const mongoose = require("mongoose");
const { model } = require("./user");

const categorySchema = new mongoose.Schema({

    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    }
}, {timestamp:true}

);

module.exports = mongoose.model("Category",categorySchema);