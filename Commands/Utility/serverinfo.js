const serverinfoembed = require('../../Embeds/CommandEmbeds/UtilityEmbeds/USInfo/serverinfo')

module.exports = {
    name: 'ServerInfo' ,
    aliases: ['serverinfo', 'si', 'sinfo', 'si'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 0,
    description: 'Shows User Info About A User or Pinged User',
    execute(Client, msg, args, Discord) {

        const { guild } = msg
        serverinfoembed(Client, msg, args, Discord, guild)
       
    }
}
