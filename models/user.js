    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const userSchema = new Schema({

    username: String,
    googleId: String,
    thumbnail: String,
    email: String,
    comment: String,
    admin: Number
        
    }, { timestamps: true });


    const User = mongoose.model('user', userSchema);
    module.exports = User;


    