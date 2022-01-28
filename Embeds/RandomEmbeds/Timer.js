function StartTimer(Client, Discord, msg, time, reason){
    let TimerEmbed = new Discord.MessageEmbed()
    .setAuthor(`${msg.author.tag} Precisa de um alarme`, msg.author.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setColor('#ffc0cb')
    .setDescription(`Tempo: \`${time}\`\nRazão: \`${reason}\``)
    .setFooter(Client.user.tag, Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setTimestamp()

    msg.channel.send({embeds: [TimerEmbed]}).then(m =>{
        setTimeout(()=>{
            m.delete()
        }, time)
    })
}

function EndTimer(Client, Discord, msg, time, reason){
    let EndTimerEmbed = new Discord.MessageEmbed()
    .setAuthor(`${msg.author.tag} o teu alarme acabou!`, msg.author.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setColor('#ffc0cb')
    .setDescription(`Tempo: \`${time}\`\nRazão: \`${reason}\`\nO Alarm foi ativado neste servidor ${msg.guild.name}`)
    .setFooter(Client.user.tag, Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setTimestamp()
    
    msg.author.send({embeds: [EndTimerEmbed]})
     
}

module.exports = {
    StartTimer,
    EndTimer
}