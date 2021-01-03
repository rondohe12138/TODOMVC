const mongoose = require("mongoose");
const { stringify } = require("querystring");
const con = mongoose.createConnection("mongodb:localhost:3000/userinfo");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true,
    }
})

const User = con.model("User", UserSchema);

const model = { User };

module.exports = function(modelname) {
    return model(modelname)
}