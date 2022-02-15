module.exports = async (Discord, Client, msg, categories, Prefix) => {
    let HelpInfo = new Discord.MessageEmbed()
        .setColor('#c19e3c')
        .setTitle(`Commandos do SleepyBot`)
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField('**Prefixo**', `Prefixo do bot é: \`${Prefix}\``)
        .addField('**Páginas**', `\`1.Informação do SleepyBot\` \n \`2.Utility\` \n \`3.Voz\` \n  \`4.Diversão\` \n \`5.Admin\` \n \`6.Procura\``)
        .addField('**Ajuda na Navegação**', `Use ${Prefix}h "page"`)
        .setFooter({
            text:`Usage Syntax: <required> [optional]`
        })

    return msg.channel.send({ embeds: [HelpInfo] }).then(msg.delete());
    
}