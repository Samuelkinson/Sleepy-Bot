const moment = require("moment")
require("moment-duration-format")


module.exports = {
    name: 'uptime' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Diz o Uptime do SleepyBot',
    execute(Client, msg, args, Discord) {

        
    const duration = moment.duration(Client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        let embed = new Discord.MessageEmbed()
            .setTitle("⏱Uptime")
            .setDescription(`${duration}`)
            .setColor('#ffc0cb')

       return msg.channel.send({embeds: [embed]}).then(msg.delete());

    
    }   
}