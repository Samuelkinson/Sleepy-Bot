module.exports =(Client, msg, args, Discord, user, json) => {
    
    let SeftRoastEmbed = new Discord.MessageEmbed()
        .setTitle(`\`${user}\` decidiu ser humilhado`)
        .setColor('#ff748c')
        .setDescription(json.insult)
        .setFooter({
            text: Client.user.tag, 
            iconURL:Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024})
            })  
        .setTimestamp()

    return msg.channel.send({embeds: [SeftRoastEmbed]})


}