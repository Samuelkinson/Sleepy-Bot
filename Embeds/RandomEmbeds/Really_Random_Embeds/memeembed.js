module.exports = (Client, msg, args, Discord, json) =>{

    const memeEmbed = new Discord.MessageEmbed()
    .setColor('#ff748c')
    .setTitle(json.title)
    .setImage(json.url)
    .addFields(
        {name: '😴Pediu o meme:', value: `${msg.author.tag}`, inline: true}, 
        {name: '🔗Link:', value: `${json.postLink}`, inline: true},
        {name: '👩‍💻Subreddit:', value:`r/${json.subreddit}`, inline:true }
        )
    .setFooter({
            text:`Comando Patrocinado por @SleepyBot 😴`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    })
        
    return msg.channel.send({embeds:[memeEmbed]}).then(msg.delete());
}