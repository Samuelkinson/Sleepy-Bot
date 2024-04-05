const mongoose = require('mongoose')

const NickNamesSchema = mongoose.Schema({
    OsuNickname: String,
    FaceitNickname: String,
    id: String,
})

module.exports = mongoose.model('NickNames-Schema', NickNamesSchema)