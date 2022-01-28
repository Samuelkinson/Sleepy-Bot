module.exports = (Discord, Client, mentionedMember, json, msg) =>{
    let roastEmbed = new Discord.MessageEmbed()
    .setTitle(`\`${mentionedMember.username}\` decidiu ser humilhado`)
    .setColor('#cc6600')
    .setDescription(json.insult)
    .setFooter(Client.user.tag, Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024})) 
    .setTimestamp()

    return msg.channel.send({embeds: [roastEmbed]})
}