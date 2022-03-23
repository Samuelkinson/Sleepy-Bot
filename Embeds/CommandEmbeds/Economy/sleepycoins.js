const Emojis = require('../../../Resources/Emojis.json').Emojis;

module.exports = (Client, msg, SleepyCoins, member, Discord) =>{

    const SleepyEmoji = Client.emojis.cache.get(Emojis.SleepyCoin);
    let embed = new Discord.MessageEmbed()
    .setColor('#5d8aa8')
    .setTitle(`Sleepy's${SleepyEmoji}`)
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
    .addField(`${member.user.username}:`, `\`${SleepyCoins}\`${SleepyEmoji}`)
   .setFooter({
       text:'Comando Patrocinado por @SleepyBot 😴', 
       iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
     })
    msg.channel.send({embeds:[embed]}).then(msg.delete())

}