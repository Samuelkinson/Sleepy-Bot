const mongoose = require('mongoose')

const OwnerSchema = mongoose.Schema({
    Nickname: String,
    User: String,
})

module.exports = mongoose.model('Owner-Schema', OwnerSchema)