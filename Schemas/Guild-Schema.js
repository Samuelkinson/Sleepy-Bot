const mongoose = require('mongoose')

const RequiredString = {
    type: String,
    required: true
}

const GuildSchema = mongoose.Schema({
    // Guild ID
    GuildID: RequiredString,
    guildName: RequiredString,
    prefix:String,
    WelcomeChannelId: String,
    GoodbyeChannelId: String,
})


module.exports = mongoose.model('Guild-Schema', GuildSchema)