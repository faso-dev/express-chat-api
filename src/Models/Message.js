//load mongoose for db modeling
const mongoose = require('mongoose');
//set mongoose schema
const Schema = mongoose.Schema;

//message schema
const messageSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
});
//export the schema
module.exports = mongoose.model('message', messageSchema);
