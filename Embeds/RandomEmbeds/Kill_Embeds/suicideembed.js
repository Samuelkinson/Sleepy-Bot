module.exports = (Client, msg, args, Discord, cmd, member) =>{

    let suicideembed = new Discord.MessageEmbed()
    .setColor('#ff748c')
    .setTitle(`\`${member.user.username}\` \*\*matou-se\*\* 💥`)
    .setThumbnail(`${member.user.displayAvatarURL({dynamic: true, size: 512})}`)
    .addFields(
    {name: 'Porque?', value: '😢', inline: true},
    )
    .setFooter({
        text:`Comando Patrocinado por @SleepyBot 😴`, 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    }) 

    return msg.channel.send({embeds:[suicideembed]}).then(msg.delete())
}