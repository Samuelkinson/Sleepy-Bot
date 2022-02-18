const userinfoembed = require('../../Embeds/CommandEmbeds/UtilityEmbeds/USInfo/userinfo')

module.exports = {
    name: 'userinfo' ,
    aliases: ['user-info', 'ui', 'memberinfo', 'member-info', 'mi'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 0,
    description: 'Shows User Info About A User or Pinged User',
    premium: false,
    premiumguild: false, 
    owner: false,
    execute(Client, msg, args, Discord) {

        const member = msg.mentions.members.first() || msg.member   
        userinfoembed(Client, msg, args, Discord, member )
    }
}
