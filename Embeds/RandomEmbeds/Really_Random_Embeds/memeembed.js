module.exports = (Client, msg, args, Discord, json) =>{

    const memeEmbed = new Discord.MessageEmbed()
    .setColor('#ff748c')
    .setTitle(json.title)
    .setImage(json.url)
    .addFields(
        {name: 'Pediu o meme:', value: `${msg.author.tag}`, inline: true}, 
        {name: 'Link:', value: `${json.postLink}`, inline: true},
        )
    .setFooter({
        text:`Subreddit r/${json.subreddit} `
    })
    return msg.channel.send({embeds:[memeEmbed]}).then(msg.delete());
}