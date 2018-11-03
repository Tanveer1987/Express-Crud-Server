const mongoose = require('mongoose');

module.exports = mongoose.model('friend', new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required']
    },
    group : {
        type : String,
        required : [true, 'Group is required']
    },
    imagePath : {
        type : String,
        required : [true, 'ImagePath is required']
    }
}));