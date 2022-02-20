const timedisplay = require('../../Resources/timedisplay')

module.exports = (msg, time_left, command, Discord) =>{
    let embed = new Discord.MessageEmbed()
    .setTitle('Relaxa')
    .setDescription(`O comando \`${command.name}\` tem cooldown de \`${timedisplay.time(command.cooldown)}\` \n daqui a **${timedisplay.time(time_left.toFixed(0))}** podes voltar a usá-lo!`)
    .setColor('#2f3136')

    return msg.channel.send({embeds: [embed]})

}


