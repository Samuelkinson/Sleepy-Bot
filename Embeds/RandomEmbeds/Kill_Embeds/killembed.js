module.exports = (Client, msg, args, Discord, cmd, member,  mentionMember) =>{

    let killedembed = new Discord.MessageEmbed()
                .setColor('#ff748c')
                .setTitle(`\`${mentionMember.user.username}\` foi \*\* morto :knife: \*\*`)
                .setThumbnail(`${member.user.displayAvatarURL({dynamic: true, size: 512})}`)
                .addFields(
                {name: 'Quem?', value: ':zipper_mouth: ', inline: true},
                {name: 'Como?', value: ':face_with_monocle: ', inline: true},
                {name: 'Porque?', value: ':sleeping: ', inline: true},
                )
                .setFooter({
                    text:`Não sei de nada`,  
                    iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
                })

    return msg.channel.send({embeds:[killedembed]}).then(msg.delete());
}