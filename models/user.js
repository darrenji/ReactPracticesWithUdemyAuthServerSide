const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define model

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});


//create mosel class
const ModelClass = mongoose.model('user', userSchema);

//export the model
module.exports = ModelClass;