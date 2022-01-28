module.exports = (msg, Discord, Client, Prefix) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Vejo que estás a necessitar de uma ajuda`)
    .addField(`**Tutorial**`, `Usa \`${Prefix}help\` para te ajudar`)
    .setFooter(Client.user.tag, Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024}))
    .setTimestamp()
    .setColor('RED')

    return msg.reply({embeds: [embed]})
}