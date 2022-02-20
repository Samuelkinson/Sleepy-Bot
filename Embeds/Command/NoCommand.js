module.exports = (msg, Discord, Client, Prefix) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Vejo que estás a necessitar de uma ajuda!`)
    .addField(`**Tutorial**`, `Usa \`${Prefix}help\` para te ajudar`)
    .setFooter({
        text:'@sleepybot tutoriais 😴', 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    }) 
    .setTimestamp()
    .setColor('#2f3136')

    return msg.reply({embeds: [embed]})
}