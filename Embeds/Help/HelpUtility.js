const DefaultPrefix = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')
module.exports = async (Discord, Client, msg, categories, Prefix) => {
    

    let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
    if (data) Prefix = data.prefix
    else Prefix = DefaultPrefix

    let HelpUtility = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Comandos de Utility do SleepyBot')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`❓` + categories[5].name, categories[5].value)
        .addField(`Atalhos` ,`${Prefix}h "u" or "3"` )
        .setFooter({
            text:`Para mais info usa ${Prefix}help <Comando>`
        })
        
    return msg.channel.send({ embeds: [HelpUtility] }).then(msg.delete());
}