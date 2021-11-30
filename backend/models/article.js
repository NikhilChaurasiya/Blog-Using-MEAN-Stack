const mongoose = require('mongoose')

const articleSchema =  new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type:String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type:Number,
        default:0
    }
})

module.exports =  mongoose.model('Article',articleSchema)