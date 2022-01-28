const DefaultPrefix = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')

module.exports = async (Discord, Client, msg, categories) => {
    let Prefix;

    let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
    if (data) Prefix = data.prefix
    else Prefix = DefaultPrefix

    let HelpFun = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Comandos de diversão')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`🥳**${categories[1].name}**`, categories[1].value)
        .setFooter(`Para mais info usa ${Prefix}help <Comando>`)

    return msg.channel.send({ embeds: [HelpFun] })

}

