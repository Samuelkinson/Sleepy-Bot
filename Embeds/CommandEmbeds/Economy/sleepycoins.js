module.exports = (Client, msg, SleepyCoins, member, Discord) =>{

    let embed = new Discord.MessageEmbed()
    .setColor('#5d8aa8')
    .setTitle('Sleepy Coins😴')
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
    .addField(`${member.user.username}:`, `\`${SleepyCoins}\``)
   .setFooter({
       text:'Comando Patrocinado por @SleepyBot 😴', 
       iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
     })
    msg.channel.send({embeds:[embed]}).then(msg.delete())

}