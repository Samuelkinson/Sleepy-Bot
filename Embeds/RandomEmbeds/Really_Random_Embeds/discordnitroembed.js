module.exports = (Client, msg, args, Discord) =>{

    const member = msg.mentions.members.first() || msg.member
    let embed = new Discord.MessageEmbed()
            .setColor('#ff748c')
            .setTitle('Discord nitro grátis🎉')
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .addFields(
            {name: 'Nitro grátis 🥳', value: `\*\*${member.user.username},\*\* clica [aqui](https://goo.gl/CWqeBF)`, inline: true},
            )
            .setFooter({
                text:`Comando Patrocinado por @SleepyBot 😴`, 
                iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
            })
            
    msg.channel.send({embeds: [embed]}).then(msg.delete()) 
    
}