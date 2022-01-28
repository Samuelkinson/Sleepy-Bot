module.exports = {
    name: 'id' ,
    aliases: ['userid'],
    permissions: [],
    cooldown: 0,
    description: '',
    execute(Client, msg, args, Discord) {

        var mention = msg.mentions.members.first() || msg.member 
        if(!mention) return msg.channel.send({embed: {
                description: "Menciona alguém para arranjar o ID"
            }})
        const lolid = new Discord.MessageEmbed()
        .setThumbnail(mention.user.avatarURL)
        .setColor("#a35ecc")
        .addField('Here is ' + `${mention.user.username}\'s ID`, mention.id)
        msg.channel.send({embeds: [lolid]})  
    }
}