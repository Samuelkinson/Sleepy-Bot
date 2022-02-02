module.exports = (Client, msg, args, Discord) =>{

    const member = msg.mentions.members.first() || msg.member
    let embed = new Discord.MessageEmbed()
            .setColor('#ff748c')
            .setTitle('Discord nitro grátis:tada:')
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .addFields(
            {name: 'Nitro grátis :partying_face:', value: `\*\*${member.user.username},\*\* clica [aqui](https://goo.gl/CWqeBF)`, inline: true},
            )
            .setFooter({
                text:`Nunca te entregarei!`, 
                iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
            })
    msg.channel.send({embeds: [embed]}).then(msg.delete()) 
    
}