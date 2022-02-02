const fetch = require('node-fetch')

module.exports = (Discord, Client, mentionedMember, msg) =>{

    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(json => {      
    let roastEmbed = new Discord.MessageEmbed()
    .setTitle(`\`${mentionedMember.username}\` vai ser humilhado`)
    .setColor('#cc6600')
    .setDescription(json.insult)
    .setFooter({
         text: Client.user.tag, 
         iconURL:Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024})
    }) 
    .setTimestamp()

    return msg.channel.send({embeds: [roastEmbed]})}
    )
}
