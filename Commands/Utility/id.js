module.exports = {
    name: 'id' ,
    aliases: ['userid'],
    permissions: [],
    cooldown: 0,
    description: '',
    premium: false,
    premiumguild: false, 
    owner: false,
    execute(Client, msg, args, Discord) {

        var mention = msg.mentions.members.first() || msg.member 
        const idembed = new Discord.MessageEmbed()
        .setThumbnail(mention.user.avatarURL)
        .setColor("#a35ecc")
        .addField('🆔 Here is ' + `${mention.user.username}\'s ID`, mention.id)
        msg.channel.send({embeds: [idembed]})  
    }
}