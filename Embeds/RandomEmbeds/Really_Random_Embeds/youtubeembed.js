module.exports = (Client, msg, args, Discord, video)  => {

        let embed = new Discord.MessageEmbed()
        .setColor('#37dc0c')
        .setTitle(video.title)
        .setImage(video.bestThumbnail.url)
        .setAuthor({ name: video.author.name})
        .addField("👀Views", video.views.toLocaleString(), true)
        .addField("🕰Duração", video.duration, true)
        .setDescription(video.url)
        .setFooter({
            text: `Youtube Search!`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
             })
           
           
    return msg.channel.send({embeds:[embed]})

}