const DefaultPrefix = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')

module.exports = async (Discord, Client, msg, categories, Prefix) => {
    

    let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
    if (data) Prefix = data.prefix
    else Prefix = DefaultPrefix

    let HelpSearch = new Discord.MessageEmbed()
        .setColor('#37dc0c')
        .setTitle('Comandos de procura')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`🔎**${categories[4].name}**`, categories[4].value)
        .addField(`Atalhos` ,`${Prefix}h "s" or "5"` )
        .setFooter({
            text:`Para mais info usa ${Prefix}help <Comando>`
        })

    return msg.channel.send({ embeds: [HelpSearch] }).then(msg.delete());

}