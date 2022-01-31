const DefaultPrefix = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')

module.exports = async (Discord, Client, msg, categories, Prefix) => {
   

    let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
    if (data) Prefix = data.prefix
    else Prefix = DefaultPrefix
   

    let HelpAdmin = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Comandos de Administrador')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`👑**${categories[0].name}**`, categories[0].value)
        .addField(`**Shortcuts**` ,`${Prefix}h "a" or "5"` )
        .setFooter({
            text:`Para mais info usa ${Prefix}help <Comando>`
        })

    return msg.channel.send({ embeds: [HelpAdmin] }).then(msg.delete());
}