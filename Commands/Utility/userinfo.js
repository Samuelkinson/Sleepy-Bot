const moment = require('moment') // npm i moment
moment.locale('ENG')

module.exports = {
    name: 'userinfo' ,
    aliases: ['user-info', 'ui', 'memberinfo', 'member-info', 'mi'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    description: 'Shows User Info About A User or Pinged User',
    execute(Client, msg, args, Discord) {
        const member = msg.mentions.members.first() || msg.member    // For Status Of User, Emojis To Look Nice ;)

        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle(`Informação sobre ${member.user.username}`, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addField('👑Nome', `${member.user.username}#${member.user.discriminator}`) // We Use Emojis Also
        .addField('㊙ID', `${member.id}`)
        .addField('📅Conta Criada', `${moment.utc(member.user.createdAt).format('LLLL')}`)
        .addField('👒Entrou no servidor', `${moment.utc(member.joinedAt).format('LLLL')}`)
        .addField('🎤Canal de voz', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'Not In A VC')
        .addField('🎐Cargos', `${member.roles.cache.map(role => role.toString())}`, true)
       
        msg.channel.send({embeds: [embed]})
    }
}
