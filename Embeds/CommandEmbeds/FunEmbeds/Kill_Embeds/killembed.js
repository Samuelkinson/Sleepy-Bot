module.exports = (Client, msg, args, Discord, cmd, member,  mentionMember) =>{

    let killedembed = new Discord.MessageEmbed()
                .setColor('#ff748c')
                .setTitle(`\`${mentionMember.user.username}\` foi \*\* morto :knife: \*\*`)
                .setThumbnail(`${member.user.displayAvatarURL({dynamic: true, size: 512})}`)
                .addFields(
                {name: 'Quem?', value: '🤐 ', inline: true},
                {name: 'Como?', value: '🧐' , inline: true},
                {name: 'Porque?', value: '😴 ', inline: true},
                )
                .setFooter({
                    text:`Comando Patrocinado por @SleepyBot 😴`,  
                    iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
                })

    return msg.channel.send({embeds:[killedembed]}).then(msg.delete());
}