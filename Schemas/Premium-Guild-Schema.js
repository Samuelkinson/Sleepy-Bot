const mongoose = require('mongoose')

const PremiumGuildSchema = mongoose.Schema({
    GuildName: String,
    Guild: String,
    Expire: Number,
    Permanent: Boolean,
})

module.exports = mongoose.model('PremiumGuild-Schema', PremiumGuildSchema)