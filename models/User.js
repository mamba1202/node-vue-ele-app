const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Creat Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    data: {
        type: Data,
        default: Date.now
    },

})

module.exports = user = mongoose.model("users", UserSchema)
