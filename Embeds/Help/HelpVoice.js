const DefaultPrefix = require('../../config.json').prefix
const GuildSchema = require('../../Schemas/Guild-Schema')

module.exports = async (Discord, Client, msg, categories) => {
    let Prefix;

    let data = await GuildSchema.findOne({ GuildID: msg.guild.id })
    if (data) Prefix = data.prefix
    else Prefix = DefaultPrefix

    let HelpVoice = new Discord.MessageEmbed()
        .setColor('#4cc7c9')
        .setTitle('Comandos de Voz')
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addFields(`🔊**${categories[4].name}**`, categories[4].value)
        .setFooter(`Para mais info usa ${Prefix}help <Comando>`)

    return msg.channel.send({ embeds: [HelpVoice] })
}