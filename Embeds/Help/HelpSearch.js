const DefaultPrefix = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')

module.exports = async (Discord, Client, msg, categories) => {
    let Prefix;

    let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
    if (data) Prefix = data.prefix
    else Prefix = DefaultPrefix

    let HelpSearch = new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Comandos de procura')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField(`🔎**${categories[2].name}**`, categories[2].value)
        .setFooter(`Para mais info usa ${Prefix}help <Comando>`)

    return msg.channel.send({ embeds: [HelpSearch] })

}