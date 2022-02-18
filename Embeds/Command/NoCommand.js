module.exports = (msg, Discord, Client, Prefix) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Vejo que estás a necessitar de uma ajuda`)
    .addField(`**Tutorial**`, `Usa \`${Prefix}help\` para te ajudar`)
    .setFooter({
        text:'Erro 😴', 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    }) 
    .setTimestamp()
    .setColor('RED')

    return msg.reply({embeds: [embed]})
}