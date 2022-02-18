const mongoose = require('mongoose')

const PremiumSchema = mongoose.Schema({
    Nickname: String,
    User: String,
})

module.exports = mongoose.model('Premium-Schema', PremiumSchema)