module.exports = {
    name: 'ServerInfo' ,
    aliases: ['serverinfo', 'si', 'sinfo', 'si'],
    permissions: ['ADMINISTRATOR'],
    cooldown: 120,
    description: 'Shows User Info About A User or Pinged User',
    execute(Client, msg, args, Discord) {

        const { guild } = msg
        const icon = msg.guild.iconURL() // Icon Of Server
        const roles = msg.guild.roles.cache.map(e => e.toString()) // Roles Of Server
        const emojis = msg.guild.emojis.cache.map(e =>  e.toString()) // Emojis Of Server
        const create = msg.guild.createdAt.toLocaleDateString() // Server Create Date 
        const members = msg.guild.members.cache // Members In Server

        guild.fetchOwner().then(guildinfo =>{
            const embed = new Discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle('Server Info')
            .setThumbnail(`${icon}`)
            .addFields(
                {name: '👑Dono do Servidor: ', value: guildinfo.user.username, inline: true},
                {name: '㊙Id do servidor ', value: guildinfo.id, inline: true},
                {name: '📅Criado em: ', value: `${create}`, inline: true},
            )
            .addFields(
                {name: '🎴Nível do Boost ', value: guild.premiumTier, inline: true}, 
                {name: '🎴Número de Boosts ', value: guild.premiumSubscriptionCount.toString(), inline: true}  
            ) 
           
            .addFields(
                {name: '👒Número de membros ', value: `${guild.memberCount}`, inline: false},        
            ) 


            .addField('🧸Emojis:',! emojis ?emojis : `${emojis} N/A`, )  
            .addField('🎐Cargo mais alto', guild.roles.highest.toString())
            .addField('🎐Cargos:', `${roles}`, true)// <true> Means All Roles Will Come In Line*/
            .setFooter('Espero que tenha sido util!', icon) 
            msg.channel.send({embeds: [embed]})
        });
       
    }
}
