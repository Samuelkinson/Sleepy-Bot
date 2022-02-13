module.exports = (Client, msg, args, Discord, video)  => {

        let embed = new Discord.MessageEmbed()
        .setColor('#37dc0c')
        .setTitle(video.title)
        .setImage(video.bestThumbnail.url)
        .setAuthor({ name: video.author.name})
        .addField("👀Visualizações", video.views.toLocaleString(), true)
        .addField("🕰Duração", video.duration, true)
        .setDescription(video.url)
        .setFooter({
            text:`Comando Patrocinado por @SleepyBot 😴`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
        }); 
        
           
           
    return msg.channel.send({embeds:[embed]})

}