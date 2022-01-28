module.exports = (msg, time_left, command, Discord) =>{
    let embed = new Discord.MessageEmbed()
    .setTitle('Tem calma')
    .setDescription(`Vai lá com mais calma o comando \`${command.name}\` tem cooldown de \`${command.cooldown}s\` \n daqui a **${time_left.toFixed(0)} segundos ** podes voltar a usá-lo!`)
    .setColor('#000')

    return msg.reply({embeds: [embed]})

}


