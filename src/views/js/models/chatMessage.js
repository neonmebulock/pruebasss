const mongoose = require('mongoose');
const { Schema } = mongoose;

// const ChatShmea = new Schema({
//     user: String,
//     message:String,
//     created_at: {
//         type: Date,
//         default: Date.now
//     }
// });

const ChatShmea = new Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

ChatShmea.index({ created_at: 1 }, { expireAfterSeconds: 60 });
module.exports = mongoose.model('Chat', ChatShmea);


