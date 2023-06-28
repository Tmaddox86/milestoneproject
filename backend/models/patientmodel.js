const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    race: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required:true
    },
    mobile:{
        type: Number,
        required: true, 
        minlength: [10, "Please Enter a valid Mobile Number"],
    }
} ,{timestamps: true})

module.exports = mongoose.model('Patient', PatientSchema)