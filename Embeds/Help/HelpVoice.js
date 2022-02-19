const DefaultPrefix = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')

module.exports = async (Discord, Client, msg, categories, Prefix) => {
    

    let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
    if (data) Prefix = data.prefix
    else Prefix = DefaultPrefix
    
    let HelpVoice = new Discord.MessageEmbed()
        .setColor('#4cc7c9')
        .setTitle('Comandos de Voz do SleepyBot')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`🔊` + categories[6].name, categories[6].value)
        .addField(`**Shortcuts**` ,`${Prefix}h "v" or "4"` )
        .setFooter({
            text:`Para mais info usa ${Prefix}help <Comando>`
        })

    return msg.channel.send({ embeds: [HelpVoice] }).then(msg.delete());
}