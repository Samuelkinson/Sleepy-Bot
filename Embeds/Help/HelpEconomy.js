const DefaultPrefix = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')

module.exports = async (Discord, Client, msg, categories, Prefix) => {
   

    let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
    if (data) Prefix = data.prefix
    else Prefix = DefaultPrefix
   

    let HelpEconomy = new Discord.MessageEmbed()
        .setColor('#5d8aa8')
        .setTitle('Comandos de economia')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`💰**${categories[2].name}**`, categories[2].value)
        .addField(`Atalhos` ,`${Prefix}h "a" or "6"` )
        .setFooter({
            text:`Para mais info usa ${Prefix}help <Comando>`
        })

    return msg.channel.send({ embeds: [HelpEconomy] }).then(msg.delete());
}