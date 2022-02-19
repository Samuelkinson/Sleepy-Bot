module.exports = async (Discord, Client, msg, categories, Prefix) => {
    let HelpInfo = new Discord.MessageEmbed()
        .setColor('#c19e3c')
        .setTitle(`Commandos do SleepyBot`)
        .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .addField('**Prefixo**', `Prefixo do bot é: \`${Prefix}\``)
        .addField('**Páginas**', `\`1.Admin\` \n \`2.Diversão\` \n \`3.Utilidade\` \n  \`4.Voz\` \n \`5.Procura\` \n \`6.Economia\``)
        .addField('**Ajuda na Navegação**', `Use ${Prefix}h "pág."`)
        .setFooter({
            text:`Sintaxe de uso: <obrigatório> [opcional] `
        })

    return msg.channel.send({ embeds: [HelpInfo] }).then(msg.delete());
    
}