const moment = require("moment")
require("moment-duration-format")


module.exports = {
    name: 'uptime' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Diz o Uptime do SleepyBot',
    premium: false,
    premiumguild: false, 
    owner: false,
    execute(Client, msg, args, Discord) {

        
    const duration = moment.duration(Client.uptime).format(" D [dias], H [hrs], m [min], s [s]");
        let embed = new Discord.MessageEmbed()
            .setTitle("⏱Uptime")
            .setDescription(`${duration}`)
            .setColor('#ffc0cb')

       return msg.channel.send({embeds: [embed]}).then(msg.delete());

    
    }   
}