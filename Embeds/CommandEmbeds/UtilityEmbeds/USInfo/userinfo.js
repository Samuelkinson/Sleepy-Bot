const moment = require('moment') 
moment.locale('ENG')

module.exports = (Client, msg, args, Discord, member ) => {
    
    const embed = new Discord.MessageEmbed()
    .setColor('#a35ecc')
    .setTitle(`Informação sobre ${member.user.username}`, member.user.displayAvatarURL())
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
    .addField('👑Nome', `${member.user.username}#${member.user.discriminator}`) // We Use Emojis Also
    .addField('㊙ID', `${member.id}`)
    .addField('📅Conta Criada', `${moment.utc(member.user.createdAt).format('LLLL')}`)
    .addField('👒Entrou no servidor', `${moment.utc(member.joinedAt).format('LLLL')}`)
    .addField('🎤Canal de voz', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'Não está num canal de voz')
    .addField('🎐Cargos', `${member.roles.cache.map(role => role.toString())}`, true)
    .setFooter({
        text:'Comando Patrocinado por @SleepyBot 😴', 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    }) 
    msg.channel.send({embeds: [embed]}).then(msg.delete())

}