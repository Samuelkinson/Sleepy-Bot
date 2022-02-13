const fetch = require('node-fetch')

module.exports =(Client, msg, Discord, user) => {
    
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(json => {    
    let SeftRoastEmbed = new Discord.MessageEmbed()
        .setTitle(`\`${user}\` decidiu ser humilhado`)
        .setColor('#ff748c')
        .setDescription(json.insult)
        .setFooter({
            text:`Comando Patrocinado por @SleepyBot 😴`, 
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
        })
        .setTimestamp()

    return msg.channel.send({embeds: [SeftRoastEmbed]}).then(msg.delete())
     
    })
}