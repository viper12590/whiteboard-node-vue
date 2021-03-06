const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    // postId: {type: Number, required: true},
    author: {type: String, required: true},
    body: {type: String, default: "", required: true},
    anonymous: {type: Boolean, default: false},
    answer: {type: Boolean, default: false}
},{
    timestamps: true
});

module.exports = mongoose.model("Comment",commentSchema);