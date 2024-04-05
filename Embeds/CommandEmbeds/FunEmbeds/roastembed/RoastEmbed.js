const fetch = require('node-fetch')

module.exports = (Discord, Client, mentionedMember, msg) =>{

    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(json => {   
           
            let roastEmbed = new Discord.MessageEmbed()
            .setTitle(`\`${mentionedMember.username}\` vai ser humilhado`)
            .setColor('#ff748c')
            .setDescription(json.insult)
            .setFooter({
                text:`Comando Patrocinado por @SleepyBot 😴`, 
                iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
            })
            .setTimestamp()

            return msg.channel.send({embeds: [roastEmbed]}).then(msg.delete()) 
        }
    )
}
